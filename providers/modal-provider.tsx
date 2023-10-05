'use client'
import { useState, useEffect } from "react";
import PreviewModal from "@/components/PreviewModal";

export default function ModalProvider() {
    const [isMounted, setIsMounted] = useState(false)


    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <PreviewModal />
        </>
    )
}