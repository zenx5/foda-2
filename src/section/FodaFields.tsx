"use client"
import Field from "@/components/Field"


export default function FodaFields({ response, onChange }:any){
    const handlerChange = (key: string, items: string[]) => {
        onChange && onChange(key, items)
    }

    return <section className="w-full grid gap-4 sm:grid-cols-2 sm:grid-rows-2">
        <Field items={response?.threats as string[]} head="threats" color="red" onChange={handlerChange}/>
        <Field items={response?.strengths as string[]} head="strengths" color="forestgreen" onChange={handlerChange}/>
        <Field items={response?.weaknesses as string[]} head="weaknesses" color="#673ab7" onChange={handlerChange}/>
        <Field items={response?.opportunities as string[]} head="opportunities" color="cyan" onChange={handlerChange}/>
    </section>


}