import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'
import { Factuality } from 'autoevals'
import { evalite } from 'evalite'

evalite('My Eval', {
  data: async () => {
    return [{ input: 'What is the capital of France?', expected: 'Paris' }]
  },
  task: async (input) => {
    const result = await streamText({
      model: openai('gpt-4o-mini'),
      system: `Answer the question concisely.`,
      prompt: input,
    })

    return result.textStream
  },
  scorers: [Factuality],
})
