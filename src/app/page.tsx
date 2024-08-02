'use client'
import { useEffect, useState } from "react"
import { experimental_useObject as useObject } from "ai/react"
import ProjectDescription from "../components/ProjectDescription"
import FodaFields from "@/section/FodaFields"
import { fodaSchema } from "./api/foda-fields/schema"


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

  return <>
    <ProjectDescription title={object?.title as string} items={foda} value={description} onChange={(value:string)=>setDescription(value)} onSend={()=>submit({value:description})}/>
    <FodaFields response={foda} onChange={handlerChange}/>
  </>
}
