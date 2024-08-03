"use client"
import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface DownloadPdfProps {
    title: string
    items: any
}

export default function DownloadPdf({ title, items }: DownloadPdfProps) {

    const handlerDownload = () => {
        var obj = new jsPDF('landscape') as jsPDF & { autoTable: any }
        obj.setFontSize(18);
        obj.text(title, 20, 20);
        obj.setFontSize(12);
        const r = obj?.autoTable({
            startX: 30,
            startY: 40,
            head: [[
                'strengths',
                'weaknesses'
            ]],
            body: [
                items?.strengths,
                items?.weaknesses
            ],
            theme: 'grid'
        })
        obj?.autoTable({
            startX: 30,
            startY: 40 + Math.max( items?.strengths?.length, items?.weaknesses?.length ) * 10,
            head: [[
                'opportunities',
                'threats'
            ]],
            body: [
                items?.opportunities,
                items?.threats
            ],
            theme: 'grid'
        });
        obj.save(`${title.replaceAll(' ','-')}.pdf`);
    }

    return <button className="bg-blue-400 text-white py-1 px-5 rounded" onClick={handlerDownload}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
    </button>
}