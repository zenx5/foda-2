import { createOpenAI } from '@ai-sdk/openai'
import { createGoogleGenerativeAI, google } from "@ai-sdk/google"
import { streamObject } from 'ai'
import { fodaSchema } from './schema'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const context = await req.json()

  const model = getModel(context.provider, context.model, context.apikey)

  const result = await streamObject({
    model,
    schema: fodaSchema,
    prompt: `Genera la matriz foda con varios items diferentes como mínimo en cada campo para ` + context.value + ` y sugiere un nombre como titulo para un documento PDF donde lo imprimiré`,
  })

  return result.toTextStreamResponse()
}

function getModel(provider:string, model:string, apiKey:string) {
  if( provider === 'openai' ) return createOpenAI({ apiKey })(model)
  if( provider === 'google' ) return createGoogleGenerativeAI({ apiKey })(model)
  return google("models/gemini-1.5-pro-latest")
}