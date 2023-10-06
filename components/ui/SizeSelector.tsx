'use client'
import { useState } from 'react'
import { Size } from '@/types'


interface SizeSelectorProps {
    sizes: Size[]
    handleSelect: (size: Size) => void
}
export default function SizeSelector({ sizes, handleSelect }: SizeSelectorProps) {
    const [selected, setSelected] = useState<Size | null>(null)

    const onSelect = (size: Size) => {
        setSelected(size)
        handleSelect(size)
    }

    return (
        <div className='flex flex-wrap gap-2'>
            {sizes.map(size => (
                <div 
                    key={size.id} 
                    className={`min-w-[60px] h-[30px] border border-gray-300 p-1 rounded-sm text-sm flex items-center justify-center 
                    cursor-pointer hover:border-gray-800 hover:bg-gray-200
                    ${selected?.id === size.id ? 'border-gray-800 bg-gray-200' : ''}`}
                    onClick={() => onSelect(size)}
                >
                    <span>{size.name}</span>
                </div>
            ))}
        </div>
    )
}