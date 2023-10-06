'use client'
import useSimplePreviewModal from "@/hooks/use-simple-preview-modal"
import Modal from "./ui/Modal"
import Gallery from "./gallery"

export default function SimplePreviewModal() {

    const modal = useSimplePreviewModal()
    const product = useSimplePreviewModal((state) => state.data)

    if(!product) return null

    return (
        <>
            <Modal
                isOpen={modal.isOpen}
                onClose={modal.onClose}
            >
                <div className="m-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                    <Gallery images={product.images} />
                </div>
            </Modal>
        </>
    )
}