'use client'
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import useCart from "@/hooks/use-cart"

import { ShoppingBag } from "lucide-react"
import Button from "./ui/Button"


export default function NavbarActions() {
    const router = useRouter()

    const [mounted, isMounted] = useState(false)

    //global state
    const cart = useCart()

    useEffect(() => {
        isMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <>
            <div className="flex items-center justify-center gap-x-4 px-2 sm:ml-auto">
                <Button className="flex items-center justify-evenly rounded-full bg-black px-2 py-2" onClick={() => router.push("/cart")}>
                    <ShoppingBag size={20} color="white"/>
                    <span className="text-sm font-medium text-white">
                        {cart.items.length}
                    </span>
                </Button>
            </div>
        </>
    )
}