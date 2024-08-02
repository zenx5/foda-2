import { NextRequest, NextResponse } from "next/server";
// import { openai } from "@ai-sdk/openai"
import { google } from "@ai-sdk/google"
import { streamText } from "ai";


export async function POST(request:NextRequest) {
    const { messages } = await request.json();

    const result = await streamText({
        model:  google("models/gemini-1.5-pro-latest"),
        messages
    })
    return result.toDataStreamResponse();
}