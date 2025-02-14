import { setTimeout } from 'node:timers/promises'
import { evalite } from 'evalite'

evalite('Failure', {
  data: async () => [
    {
      input: 'X',
    },
  ],
  task: async (input) => {
    await setTimeout(500)
    throw new Error('Fail')
  },
  scorers: [],
})
