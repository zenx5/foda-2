import React, { useState } from "react"

interface ProjectNameProps {
    onChange?: (value: string) => void
}

export default function ProjectName( {onChange}:ProjectNameProps ) {
    const [input, setInput]=useState('')

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
        onChange && onChange(event.target.value)
    }

    return (
    <div className="bg-slate-950 flex justify-between px-2 py-2 w-full sm:w-96">
        <input
            onChange={handleChange}
            value={input}
            className="bg-transparent p-1 outline-none"
            type="text"
            placeholder="Nombre del proyecto..." />
    </div>
    )
}