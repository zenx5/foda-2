interface MenuProps {
    onShare: () => void
}

export default function Menu({ onShare }:MenuProps){
    return(
        <nav className="bg-slate-600 text-gray-50 font-semibold border-2 border-black w-80">
            <div className="grid grid-cols-2 h-12 w-full">
                <button className="hover:bg-slate-500 border-r-2 border-black flex justify-around items-center">
                    <span>Ver PDF</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </button>
                <button onClick={onShare} className="hover:bg-slate-500 flex justify-around items-center">
                    <span>Descargar PDF</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}