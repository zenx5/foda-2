"use client"
import dinamic from 'next/dynamic'
const PDFDownloadLink = dinamic(
    () => import('@react-pdf/renderer').then((module) => module.PDFDownloadLink),
    {
      ssr: false,
      loading: () => <p>Loading...</p>
    }
)

interface DownloadButtonProps {
    document: any
}

export default function DownloadButton({ document }:DownloadButtonProps){

    return <PDFDownloadLink document={document} fileName="foda.pdf">
        <button className="bg-slate-600 text-gray-50 font-semibold border-2 border-black hover:bg-slate-500 flex justify-around items-center p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
        </button>
    </PDFDownloadLink>
}