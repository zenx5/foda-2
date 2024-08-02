import { google } from "@ai-sdk/google"
import { streamObject } from 'ai'
import { fodaSchema } from './schema'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const context = await req.json()

  const result = await streamObject({
    model:  google("models/gemini-1.5-pro-latest"),
    schema: fodaSchema,
    prompt: `Genera la matriz foda con varios items diferentes como mínimo en cada campo para ` + context.value + ` y sugiere un nombre como titulo para un documento PDF donde lo imprimiré`,
  })

  return result.toTextStreamResponse()
}