import { Image as ImgType } from "@/types"
import Image from "next/image"
import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"


interface GalleryTabProps {
    image: ImgType
}

export default function GalleryTab({ image }: GalleryTabProps) {


    return (
        <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
            {({ selected }) => (
                <div>
                    <span className="absolute inset-0 h-full w-full aspect-square overflow-hidden rounded-md">
                        <Image
                            src={image.url}
                            alt="Product Image"
                            fill
                            className="object-cover object-center"
                        />
                    </span>
                    <span className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2", selected ? "ring-black" : "ring-transparent")}/>
                </div>
            )}
        </Tab>
    )
}