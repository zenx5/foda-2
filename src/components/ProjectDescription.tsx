import { useTranslations } from "next-intl"
import { ChangeEvent } from "react"

interface ProjectNameProps {
    value: string
    loading: boolean
    primaryActions?: JSX.Element
    secondaryActions?: JSX.Element
    onChange?: (value: string) => void
    onSend: () => void
}

export default function ProjectDescription( { value, loading, primaryActions, secondaryActions, onChange, onSend }:ProjectNameProps ) {

    const t = useTranslations("HomePage")
    
    const handleChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        onChange && onChange(event.target.value)
    }

    return <div className="flex flex-col gap-1 left-0 justify-between px-2 py-2 w-full shadow-[0_-1px_10px_slategray] sm:shadow-none" >
        <textarea
            onChange={handleChange}
            value={value}
            disabled={loading}
            className="outline-none w-full bg-slate-200 py-2 px-4 text-slate-800"
            placeholder={`${t("Ej: Fabrica de iglus en el desierto del sahara")}`} />
        <div className="flex flex-row sm:justify-between justify-end gap-2 items-center">
            <span className="sm:flex hidden flex-row gap-1">
                { secondaryActions }
            </span>
            <span className="flex flex-row items-center gap-1">
                { primaryActions }
                <button onClick={onSend} disabled={loading} className="bg-blue-400 text-white disabled:bg-blue-200 py-1 px-5 rounded">{ loading ? t('Enviando...') : t('Enviar')}</button>
            </span>
        </div>
    </div>
}