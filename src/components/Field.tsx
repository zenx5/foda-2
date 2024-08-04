import { useState, ChangeEvent, FormEvent } from "react"
import Item from "./Item"
import { useTranslations } from "next-intl"

interface FieldProps {
    head: string
    items: string[]
    color: string
    onChange?: (head: string, items: string[]) => void
}

export default function Field( { head, items=[], color, onChange }:FieldProps ) {
    const [input, setInput]=useState('')

    const t = useTranslations("HomePage")

    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setInput(event.target.value)
    }

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault()
        onChange && onChange(head, [...items, input])
        setInput('')
    }

    const handlerDelete = (indexTarget:number) => {
        const newItems = items.filter( (_,index) => index!==indexTarget )
        onChange && onChange(head, newItems)
    }

    const handlerChange = (indexTarget:number, value:string) => {
        const newItems = items.toSpliced(indexTarget,1,value)
        onChange && onChange(head, newItems)
    }

    return(
        <div className="w-full p-1 bg-slate-100 h-fit">
            <h3 className="bg-white text-center text-xl sm:py-4 py-0 font-light first-letter:uppercase" style={{ borderColor:color, borderWidth:1, borderStyle:"solid", color }}>{t(head)}</h3>

            <form onSubmit={handleSubmit} className="bg-slate-200 px-2 py-1 flex justify-between items-center gap-1">
                <input onChange={handleChange} value={input} className="w-full bg-slate-200 text-slate-800 outline-none" type="text" placeholder={`${t("Ingrese")} ${t(head)}...`} />
                <button disabled={input.trim()===''} className="cursor-pointer disabled:text-slate-400 text-slate-800 disabled:cursor-default">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>

            </form>

            <ul className="w-full bg-slate-200">
                {
                    items?.map( (element,index) => <Item key={index} value={element} onChange={(value)=>handlerChange(index, value)} onDelete={()=>handlerDelete(index)} /> )
                }
            </ul>
        </div>
    )
}