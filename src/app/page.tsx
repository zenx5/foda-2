'use client'
import { useEffect, useState } from "react"
import { experimental_useObject as useObject } from "ai/react"
import ProjectDescription from "../components/ProjectDescription"
import FodaFields from "@/section/FodaFields"
import { fodaSchema } from "./api/foda-fields/schema"
import ProviderSelector from "@/components/ProviderSelector"
import DownloadPdf from "@/components/DownloadPdf"

export default function Home() {
  const [description, setDescription] = useState<string>("")
  const [foda, setFoda] = useState<FODATypes>({
    strengths: [],
    weaknesses: [],
    opportunities: [],
    threats: []
  })
  const [apiKey, setApiKey] = useState("")
  const [model, setModel] = useState("")
  const [provider, setProvider] = useState("")
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

  const handlerChangeModel = (key:string, value:string) => {
    if( key==='provider' ) setProvider(value)
    if( key==='model' ) setModel(value)
    if( key==='apikey' ) setApiKey(value)
  }

  return <>
    <ProjectDescription
      title={object?.title as string}
      items={foda}
      value={description}
      onChange={(value:string)=>setDescription(value)}
      onSend={()=>submit({
        value:description,
        provider,
        model,
        apiKey
      })}
      primaryActions={ (object?.title && <DownloadPdf title={object?.title as string} items={foda} />) as JSX.Element }
      secondaryActions={<ProviderSelector onChange={handlerChangeModel} />}
      />
    <FodaFields response={foda} onChange={handlerChange}/>
    <span className="inline sm:hidden">
      <ProviderSelector onChange={handlerChangeModel} />
    </span>
  </>
}
