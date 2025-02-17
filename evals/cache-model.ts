import { createHash } from 'node:crypto'
import type { LanguageModelV1, LanguageModelV1CallOptions } from 'ai'
import {
  experimental_wrapLanguageModel,

} from 'ai'

function createKey(params: LanguageModelV1CallOptions) {
  return createHash('sha256').update(JSON.stringify(params)).digest('hex')
}

function createResultFromCachedObject(obj: any): Awaited<ReturnType<LanguageModelV1['doGenerate']>> {
  if (obj?.response?.timestamp) {
    obj.response.timestamp = new Date(obj.response.timestamp)
  }
  return obj as any
}

export type StorageValue = string | number | null | object

export interface CacheStore {
  get: (key: string) => Promise<StorageValue>
  set: (key: string, value: StorageValue) => Promise<void>
}

export function cacheModel(model: LanguageModelV1, storage: CacheStore) {
  return experimental_wrapLanguageModel({
    model,
    middleware: {
      wrapGenerate: async (opts) => {
        const key = createKey(opts.params)

        const resultFromCache = await storage.get(key)

        if (resultFromCache && typeof resultFromCache === 'object') {
          const result = createResultFromCachedObject(resultFromCache)

          // Reset the tokens to 0 to show in the UI
          // that they were cached.
          result.usage.promptTokens = 0
          result.usage.completionTokens = 0

          return result
        }
        const generated = await opts.doGenerate()

        await storage.set(key, JSON.stringify(generated))

        return generated
      },
    },
  })
}
