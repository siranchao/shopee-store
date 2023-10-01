import { cn } from "@/lib/utils"
import { MouseEventHandler } from "react"

interface IconBtnProps {
    handleClick?: MouseEventHandler<HTMLButtonElement> | undefined
    icon: React.ReactNode
    className?: string
}

export default function IconBtn({handleClick, icon, className}: IconBtnProps) {
    return (
        <>
            <button 
                onClick={handleClick} 
                className={cn("rounded-full flex items-center justify-center p-2 bg-white border shadow-md hover:scale-110 transition", className)}
            >
                {icon}
            </button>
        </>
    )
}