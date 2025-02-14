#!/usr/bin/env node

/**
 * This script runs a local development server for previewing the resume.
 * Usage:
 * `serve.mjs` to use the default JSONResume example
 * `serve.mjs <filename>` to open a particular resume file
 */

import fs from 'node:fs/promises'
import http from 'node:http'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import minimist from 'minimist' // Modern replacement for optimist

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const args = minimist(process.argv.slice(2))
const PORT = process.env.PORT || 8888

/**
 * Loads and renders the resume
 */
async function render() {
  try {
    let resume
    if (args._.length) {
      // Load custom resume file
      const resumePath = path.resolve(process.cwd(), args._[0])
      const resumeContent = await fs.readFile(resumePath, 'utf8')
      resume = JSON.parse(resumeContent)
    }
    else {
      // Load default resume schema
      const { resumeJson } = await import('resume-schema')
      resume = resumeJson
    }

    const { render } = await import('./index.mjs')
    return await render(resume)
  }
  catch (error) {
    console.error('Error rendering resume:', error)
    return `<pre>Error: ${error.message}</pre>`
  }
}

/**
 * Creates and starts the development server
 */
async function startServer() {
  const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      })
      res.end(await render())
    }
    else {
      res.writeHead(404)
      res.end('Not found')
    }
  })

  server.listen(PORT, () => {
    console.log(`Preview: http://localhost:${PORT}/`)
    console.log('Server running. Press Ctrl+C to stop.')
  })

  // Handle server errors
  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`Port ${PORT} is already in use. Please try a different port.`)
      process.exit(1)
    }
    else {
      console.error('Server error:', error)
      process.exit(1)
    }
  })
}

// Start the server
startServer().catch((error) => {
  console.error('Failed to start server:', error)
  process.exit(1)
})
