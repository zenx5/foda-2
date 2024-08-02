import { ChangeEvent } from "react"

interface ProjectNameProps {
    value: string
    onChange?: (value: string) => void
}

export default function ProjectDescription( { value, onChange }:ProjectNameProps ) {

    const handleChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        onChange && onChange(event.target.value)
    }

    return <div className="bg-slate-950 flex justify-between px-2 py-2 w-full">
        <textarea
            onChange={handleChange}
            value={value}
            className="bg-transparent p-1 outline-none w-full"
            placeholder="Nombre del proyecto..." />
    </div>
}