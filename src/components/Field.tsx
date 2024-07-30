import React, { EventHandler, FormEvent, FormEventHandler, useState } from "react"

interface FieldProps {
    head: string
    bgHead: string
    onChange?: (head: string, items: string[]) => void
}

export default function Field( { head, bgHead, onChange }:FieldProps ) {

    const [items, setItems]=useState<string[]>([])
    const [input, setInput]=useState('')

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(event.target.value)
    }

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault()
        const newItems = [...items, input]
        setItems(newItems)
        setInput('')
        onChange && onChange(head, newItems)
    }

    const handleClickDelete = (indexTarget:number) => () => {
        const newItems = items.filter( (_,index) => index!==indexTarget )
        setItems( newItems )
        onChange && onChange(head, newItems)
    }


    return(
        <div className="bg-slate-950 w-full border-2 border-black shadow-md">
            <h3 className={`${bgHead} text-gray-100 font-semibold px-2 py-4 `}>{head}</h3>

            <form onSubmit={handleSubmit} className="bg-slate-900 px-2 py-1 flex justify-between items-center gap-1">
                <input onChange={handleChange} value={input} className="w-full bg-slate-900 outline-none" type="text" placeholder={`Ingrese ${head}...`} />
                <button disabled={input.trim()===''} className="cursor-pointer disabled:text-slate-400 disabled:cursor-default">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>

            </form>

            <ul className="w-full px-2 py-4 bg-slate-950">
                {
                    items.map( (element,index) => <li key={index} className="flex justify-between items-center my-2">
                        <span className="break-all">{element}</span>
                        <button onClick={handleClickDelete(index)} className="size-6 cursor-pointer stroke-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 hover:fill-red-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </li> )
                }
            </ul>
        </div>
    )
}