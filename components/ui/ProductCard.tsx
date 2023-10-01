'use client'
import { Product } from "@/types"
import Image from "next/image"
import IconBtn from "./IconBtn"
import Currency from "./Currency"
import { Expand, ShoppingCart } from "lucide-react"

interface ProductCardProps {
    data: Product
}

export default function ProductCard({ data }: ProductCardProps) {
   
    return (
        <>
            <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
                <div className="aspect-square rounded-xl bg-gray-100 relative">
                    <Image 
                        src={data?.images?.[0]?.url}
                        alt="Product Image"
                        fill
                        className="aspect-square object-cover rounded-md"
                    />
                    <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                        <div className="flex gap-x-6 justify-center">
                            <IconBtn 
                                handleClick={() => {}}
                                icon={<Expand size={20} className="text-gray-600"/>}
                            />
                            <IconBtn 
                                handleClick={() => {}}
                                icon={<ShoppingCart size={20} className="text-gray-600"/>}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <p className="font-semibold text-lg">
                        {data?.name}
                    </p>
                    <p className="text-sm text-gray-500">
                        {data?.category?.name}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <Currency value={data?.price}/>
                </div>
            </div>
        </>
    )
}