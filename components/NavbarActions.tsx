'use client'
import { useState, useEffect } from "react"

import { ShoppingBag } from "lucide-react"
import Button from "./ui/Button"


export default function NavbarActions() {
    const [mounted, isMounted] = useState(false)

    useEffect(() => {
        isMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <>
            <div className="ml-auto flex items-center gap-x-4">
                <Button className="flex items-center rounded-full bg-black px-4 py-2">
                    <ShoppingBag size={20} color="white"/>
                    <span className="ml-2 text-sm font-medium text-white">
                        0
                    </span>
                </Button>
            </div>
        </>
    )
}