import { ChangeEvent } from "react"
import DownloadButton from "./DownloadButton"
import DocPDF from "./DocPDF"

interface ProjectNameProps {
    title: string
    value: string
    items: FODATypes
    onChange?: (value: string) => void
    onSend: () => void
}

export default function ProjectDescription( { title, value, items, onChange, onSend }:ProjectNameProps ) {

    const handleChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        onChange && onChange(event.target.value)
    }

    return <div className="flex flex-col gap-1 left-0 justify-between px-2 py-2 w-full shadow-[0_-1px_10px_slategray] sm:shadow-none">
        <textarea
            onChange={handleChange}
            value={value}
            className="outline-none w-full bg-slate-200 py-2 px-4 text-slate-800"
            placeholder="Describe tu idea..." />
        <div className="flex flex-row justify-end gap-2 items-center">
            { title && <DownloadButton document={<DocPDF title={title} items={items} />}/>}
            <button onClick={onSend} className="bg-blue-400 text-white py-1 px-5 rounded">Enviar</button>
        </div>
    </div>
}