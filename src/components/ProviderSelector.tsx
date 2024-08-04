import { useState } from "react"
import { providers, models } from "@/tools/constant"
import { on } from "events"
import { useTranslations } from "next-intl"

export default function ProviderSelector({ onChange }: { onChange: (key: string, value: string) => void }) {
    // const [apiKey, setApiKey] = useState("")
    const [provider, setProvider] = useState("")

    const t = useTranslations("HomePage")


    const getModels = () => {
        return Object.getOwnPropertyDescriptor(models, provider)?.value || []
    }

    const handlerChange = (key:string, value:string) => {
        if( key === 'provider' ) setProvider(value)
        onChange && onChange(key, value)

    }

    return <div className="flex sm:flex-row flex-col gap-1">
        <select
            className="bg-slate-200 text-slate-800 px-2 py-1 rounded w-full"
            value={provider}
            onChange={(event) => handlerChange('provider',event.target.value)}
        >
            <option value="">{t("Proveedor")}</option>
            { providers.map( provider => <option key={provider.value} value={provider.value}>{provider.label}</option>)}
        </select>
        <select
            className="bg-slate-200 text-slate-800 px-2 py-1 rounded w-full"
            onChange={(event) => handlerChange('model', event.target.value)}
        >
            <option value="">{t("Modelo")}</option>
            { getModels().map( (model:string) => <option key={model} value={model}>{model}</option>)}
        </select>
        <input
            type="text"
            className="bg-slate-200 text-slate-800 px-2 py-1 rounded w-full"
            placeholder="API Key"
            onChange={event => handlerChange('apikey',event.target.value)}
        />
    </div>
}