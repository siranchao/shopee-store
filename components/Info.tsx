'use client'
import { Product } from "@/types"
import Currency from "./ui/Currency"
import Button from "./ui/Button"
import { ShoppingCart } from "lucide-react"

interface InfoProps {
    data: Product
}

export default function Info({ data }: InfoProps) {


    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-center justify-between">
                {data?.isFeatured ? (
                    <div className="flex items-baseline gap-4">
                        <div className="text-2xl text-red-500">
                            <Currency value={(Number(data?.price) * 0.8).toFixed(2)}/>
                        </div>
                        <div className="text-gray-900 text-md line-through">
                            <Currency value={data?.price}/>
                        </div>
                        <div className="text-green-600 text-sm font-semibold tracking-tight">
                            Limited Time Offer: 20% OFF
                        </div>
                    </div>

                ) : (
                    <p className="text-2xl text-gray-900">
                        <Currency value={data?.price}/>
                    </p>
                )}

            </div>
            
            <hr className="my-4"/>

            <div className="flex flex-col gap-y-4">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    <div>{data?.size?.value}</div>
                    <span>-</span>
                    <div>{data?.size?.name}</div>
                </div>

                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    <div>{data?.color?.name}</div>
                    <div className="h-5 w-5 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }}/>
                </div>

                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Category:</h3>
                    <div>{data?.category?.name}</div>
                    
                </div>
            </div>

            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-2">
                    Add To Card
                    <ShoppingCart />
                </Button>
            </div>

        </div>
    )
}