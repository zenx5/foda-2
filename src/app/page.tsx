'use client'
import { SetStateAction, useState } from "react"
import { PDFDownloadLink,  PDFViewer } from '@react-pdf/renderer';
import DocPDF from "../components/DocPDF"
import Field from "../components/Field"
import ProjectName from "../components/ProjectName"

export default function Home() {
  const [items, setItems] = useState({}) 
  const [name, setName]=useState('')

  

  const handlerChange = (key: any, items: any) => {
    setItems( prev => ({
      ...prev,
      [key] : items
    }))
  }
  return (
    <div  className="bg-slate-800 min-h-screen text-slate-50">
      <main className="max-w-4xl flex flex-col items-center gap-5 pt-5 px-2 mx-auto">
        <h1 className="text-xl font-semibold">Crea una matriz <span className="text-blue-400">FODA</span></h1>
        
        
        <PDFDownloadLink document={<DocPDF items={items} name={name}/>} fileName="foda.pdf">
          <button className="bg-slate-600 text-gray-50 font-semibold border-2 border-black w-44 h-12 hover:bg-slate-500 flex justify-around items-center">
            <span>Descargar PDF</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
          </button>             
        </PDFDownloadLink>       


        <ProjectName onChange={(value: SetStateAction<string>)=>setName(value)}/>
        <section className="w-full grid gap-4 sm:grid-cols-2 sm:grid-rows-2">
          <Field head="Amenazas" bgHead="bg-rose-900" onChange={handlerChange}/>
          <Field head="Fortalezas" bgHead="bg-emerald-900" onChange={handlerChange}/>
          <Field head="Debilidades" bgHead="bg-yellow-900" onChange={handlerChange}/>
          <Field head="Oportunidades" bgHead="bg-cyan-900" onChange={handlerChange}/>
        </section>        
      </main>
  </div>
  );
}
