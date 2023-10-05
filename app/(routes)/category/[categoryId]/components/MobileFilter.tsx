'use client'
import { useState } from "react"
import { Size, Color } from "@/types"
import Button from "@/components/ui/Button"
import { Plus, X } from "lucide-react"
import { Dialog } from "@headlessui/react"
import IconBtn from "@/components/ui/IconBtn"
import Filter from "./Filter"

interface FilterProps {
    sizes: Size[]
    colors: Color[]
}

export default function MobileFilter({ sizes, colors }: FilterProps) {
    const [open, setOpen] = useState(false)

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)


    return (
        <>
            <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
                Filters
                <Plus size={20} />
            </Button>

            <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
                {/* Background */}
                <div className="fixed inset-0 bg-black bg-opacity-25" />

                {/* Dialog position */}
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className="relative ml-auto flex flex-col h-full w-full max-w-xs overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                        {/* Close Button */}
                        <div className="flex items-center justify-end px-4">
                            <IconBtn icon={<X size={15}/>} handleClick={onClose} />
                        </div>

                        {/* Render filters */}
                        <div className="p-4">
                            <Filter 
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter 
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}