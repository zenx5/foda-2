"use client"
import { experimental_useObject as useObject } from "ai/react"
import { fodaSchema } from "../api/foda-fields/schema"
import { useState } from "react"

export default function Page(){
    const [value, setValue] = useState("")
    const { object, submit } = useObject({
        api:'/api/foda-fields',
        schema:fodaSchema
    })

    return <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
        <div className="border border-black rounded-lg flex flex-col p-4 gap-2">
            <input type="text" value={value} onChange={e=>setValue(e.target.value)} className="border border-black py-1 px-4"/>
            <button onClick={()=>submit({ value })} className="bg-blue-500 py-1 px-6 text-white rounded-lg">Submit</button>
        </div>
        {object && <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="border border-black p-4">
                <span className="font-bold text-lg">Strengths</span>
                { object.strengths && <ul>
                    {object?.strengths?.map( (item:string|undefined, index:number)=><li key={`strengths-${index}`}>{item}</li> )}
                </ul>}
            </div>
            <div className="border border-black p-4">
                <span className="font-bold text-lg">Weaknesses</span>
                { object.weaknesses && <ul>
                    {object?.weaknesses?.map( (item:string|undefined, index:number)=><li key={`weaknesses-${index}`}>{item}</li> )}
                </ul>}
            </div>
            <div className="border border-black p-4">
                <span className="font-bold text-lg">Threats</span>
                { object.threats && <ul>
                    {object?.threats?.map( (item:string|undefined, index:number)=><li key={`threats-${index}`}>{item}</li> )}
                </ul>}
            </div>
            <div className="border border-black p-4">
                <span className="font-bold text-lg">Opportunities</span>
                { object.opportunities && <ul>
                    {object?.opportunities?.map( (item:string|undefined, index:number)=><li key={`opportunities-${index}`}>{item}</li> )}
                </ul>}
            </div>
        </div>}
    </div>
}