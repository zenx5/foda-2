import { useState } from "react"

export default function ProjectName( {onChange} ){
    

    const [input, setInput]=useState('')    

    const handleChange=(event)=>{
        setInput(event.target.value)
        onChange && onChange(event.target.value) 

    }
    
    return (
    <div className="bg-slate-950 flex justify-between px-2 py-2 w-full sm:w-96">
        <input onChange={handleChange} value={input} className="bg-transparent p-1 outline-none" type="text" placeholder="Nombre del proyecto..." />
    </div>
    )
}