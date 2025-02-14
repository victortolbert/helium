import path from 'node:path'
import { evalite, EvaliteFile } from 'evalite'

evalite('Files', {
  data: async () => [
    {
      input: 'X',
    },
  ],
  task: async (input) => {
    return EvaliteFile.fromPath(path.join(import.meta.dirname, 'vite.svg'))
  },
  scorers: [],
})
