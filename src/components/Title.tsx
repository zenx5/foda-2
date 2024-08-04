import { useTranslations } from "next-intl"

export const Title = () => {
    const t = useTranslations("HomePage")

    return <h1 className="text-center text-4xl mt-10 font-semibold text-slate-400">
        {t("Crea una matriz")} <span className="text-slate-500">FODA</span> {t("con IA")}
    </h1>
}