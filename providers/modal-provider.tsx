'use client'
import { useState, useEffect } from "react";
import PreviewModal from "@/components/PreviewModal";
import SimplePreviewModal from "@/components/SimplePreviewModal";
import LoginModal from "@/components/LoginModal";

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
            <SimplePreviewModal />
            <LoginModal />
        </>
    )
}