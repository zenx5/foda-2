export const providers = [
    { value:"google", label:"Google" },
    { value:"openai", label:"OpenAI" }
]

export const models = {
    google: [ "models/gemini-1.5-pro-latest" ],
    openai: [ "gpt-4o", "gpt-4o-mini", "gpt-4o-turbo", "gpt-4", "gpt-3.5-turbo" ],
    anthropic: [ "claude-3-5-sonnet-20240620", "claude-3-opus-20240229", "claude-3-sonnet-20240229",  "claude-3-haiku-20240307"],
    bedrock: [ "anthropic.claude-3-5-sonnet-20240620-v1:0", "anthropic.claude-3-opus-20240229-v1:0", "anthropic.claude-3-sonnet-20240229-v1:0", "anthropic.claude-3-haiku-20240307-v1:0" ],
    mistral: [ "mistral-large-latest", "mistral-medium-latest", "mistral-small-latest", "open-mistral-nemo", "open-mixtral-8x22b", "open-mixtral-8x7b", "open-mistral-7b" ],
    groq: [ "llama-3.1-405b-reasoning", "llama-3.1-70b-versatile", "llama-3.1-8b-instant", "mixtral-8x7b-32768", "gemma2-9b-it" ]
}