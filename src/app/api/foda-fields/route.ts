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
    prompt: `Genera la matriz foda con 3 items diferentes en cada campo para ` + context.value,
  })

  return result.toTextStreamResponse()
}