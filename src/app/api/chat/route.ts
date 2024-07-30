import { NextRequest, NextResponse } from "next/server";
import { openai } from "@ai-sdk/openai"
import { streamText } from "ai";


export async function POST(request:NextRequest) {
    const { messages } = await request.json();

    const result = await streamText({
        model: openai("gpt-3.5-turbo"),
        messages
    })
    return result.toDataStreamResponse();
}