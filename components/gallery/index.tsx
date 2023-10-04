'use client'
import { Image as ImgType } from "@/types"
import { Tab } from "@headlessui/react"
import Image from "next/image"
import GalleryTab from "./GalleryTab"


interface GalleryProps {
    images: ImgType []
}

export default function Gallery({ images }: GalleryProps) {


    return (
        <>
            <Tab.Group as="div" className="flex flex-col-reverse">
                <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
                    <Tab.List className="grid grid-cols-4 gap-6">
                        {images.map((image) => (
                            <GalleryTab key={image.id} image={image} />
                        ))}
                    </Tab.List>
                </div>

                <Tab.Panels className="aspect-square w-2/3 lg:w-4/5">
                    {images.map((image) => (
                        <Tab.Panel key={image.id}>
                            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                                <Image 
                                    src={image.url}
                                    alt="Product Image"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </Tab.Panel>
                    ))}        
                </Tab.Panels>
            </Tab.Group>
        </>
    )
}