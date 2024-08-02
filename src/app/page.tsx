'use client'
import { useEffect, useState } from "react"
import { experimental_useObject as useObject } from "ai/react"
import DocPDF from "../components/DocPDF"
import Field from "../components/Field"
import ProjectDescription from "../components/ProjectDescription"
import FodaFields from "@/section/FodaFields"
import { fodaSchema } from "./api/foda-fields/schema"
import DownloadButton from "@/components/DownloadButton"



export default function Home() {
  const [description, setDescription] = useState<string>("")
  const [foda, setFoda] = useState<FODATypes>({
    strengths: [],
    weaknesses: [],
    opportunities: [],
    threats: []
  })
  const { object, submit } = useObject({
    api:'/api/foda-fields',
    schema:fodaSchema
  })


  useEffect(()=>{
    if( object ) {
      setFoda({
        strengths: object.strengths as string[],
        weaknesses: object.weaknesses as string[],
        opportunities: object.opportunities as string[],
        threats: object.threats as string[]
      })
    }
  },[object])

  const handlerChange = (key: string, items: string[]) => {
    setFoda( prev => ({
      ...prev,
      [key]: items
    }))
  }

  return <main className="bg-white min-h-screen text-slate-50 w-screen h-screen">
      <div className="max-w-4xl flex flex-col items-center gap-5 pt-5 px-2 mx-auto">
        <h1 className="text-4xl font-semibold text-slate-400">Crea una matriz <span className="text-slate-500">FODA</span> con IA</h1>
        <ProjectDescription value={description} onChange={(value:string)=>setDescription(value)} onSend={()=>submit({value:description})}/>
        <FodaFields response={foda} onChange={handlerChange}/>
        {/* <div>
          <DownloadButton document={<DocPDF title={object?.title as string} items={object as FODATypes} />} />
        </div> */}
      </div>
  </main>
}
