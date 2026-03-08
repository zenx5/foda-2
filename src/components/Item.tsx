"use client"

interface ItemProps {
    value: string
    onChange?: (value: string) => void
    onDelete?: () => void
}

export default function Item( { value, onChange, onDelete }:ItemProps ) {
    const handlerChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event.target.value)
    }

    return <li className="flex justify-between items-center my-2 text-slate-800 dark:text-slate-200 py-1 px-2 gap-2">
        <span className="w-full">
            <input type="text" className="bg-transparent outline-0 w-full" value={value} onChange={handlerChange} />
        </span>
        <span className="flex flex-row gap-1">
            <button onClick={onDelete} className="size-6 cursor-pointer stroke-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 hover:fill-slate-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
        </span>
    </li>
}