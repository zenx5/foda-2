import { ChangeEvent } from "react"

interface ProjectNameProps {
    value: string
    onChange?: (value: string) => void
    onSend: () => void
}

export default function ProjectDescription( { value, onChange, onSend }:ProjectNameProps ) {

    const handleChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        onChange && onChange(event.target.value)
    }

    return <div className="flex flex-col gap-1 justify-between px-2 py-2 w-full">
        <textarea
            onChange={handleChange}
            value={value}
            className="outline-none w-full bg-slate-200 py-2 px-4 text-slate-800"
            placeholder="Describe tu idea..." />
        <div className="flex flex-row justify-end">
            <button onClick={onSend} className="bg-blue-400 text-white py-1 px-5 rounded">Enviar</button>
        </div>
    </div>
}