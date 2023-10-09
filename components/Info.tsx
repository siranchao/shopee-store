'use client'
import { Product, Size } from "@/types"
import Currency from "./ui/Currency"
import Button from "./ui/Button"
import { ShoppingCart, TruckIcon } from "lucide-react"
import { getSizesByCategory } from "@/actions/get-sizes"
import QtySelector from "./ui/QtySelector"
import SizeSelector from "./ui/SizeSelector"
import { toast } from "react-hot-toast"

import { useState, useEffect } from "react"
import useCart from "@/hooks/use-cart"


interface InfoProps {
    data: Product
}

export default function Info({ data }: InfoProps) {
    const [sizes, setSizes] = useState<Size[]>([])
    const [qty, setQty] = useState<number>(1)
    const [size, setSize] = useState<Size | null>(null)

    //global state
    const cart = useCart()

    const calcDiscount = () => {
        let discount = 1.0
        if(data.isFeatured) discount -= 0.2
        if(data.category.name === "On Sale") discount -= 0.3
        return discount
    }

    const discount = calcDiscount()

    const handleIncrease = () => {
        setQty(prev => prev + 1)
    }

    const handleDecrease = () => {
        if(qty > 1) {
            setQty(prev => prev - 1)
        }
    }

    const selectSize = (size: Size) => {
        setSize(size)
    }

    const addToCart = () => {
        if(size) {
            cart.addToCart({id: data.id + size.id, product: data, size: size, quantity: qty})
        } else {
            toast.error("Please select size")
        }
    }

    useEffect(() => {
        getSizesByCategory(data?.category?.id)
        .then(sizes => {
            setSizes(sizes)
        })
        .catch(error => {
            console.error(error)
        })
    }, [data?.category?.id])

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-center justify-between">
                {discount !== 1 ? (
                    <div className="flex items-baseline gap-4">
                        <div className="text-2xl text-red-500">
                            <Currency value={(Number(data?.price) * discount).toFixed(2)}/>
                        </div>
                        <div className="text-gray-900 text-md line-through">
                            <Currency value={data?.price}/>
                        </div>
                        <div className="text-green-600 text-sm font-semibold tracking-tight">
                            Limited Time Offer: {((1 - discount) * 100).toFixed(0)}% Off
                        </div>
                    </div>

                ) : (
                    <div className="text-2xl text-gray-900">
                        <Currency value={data?.price}/>
                    </div>
                )}

            </div>
            
            <hr className="my-4"/>

            <div className="flex flex-col gap-y-4">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    <SizeSelector sizes={sizes} handleSelect={selectSize}/>
                </div>

                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    <div>{data?.color?.name}</div>
                    <div className="h-5 w-5 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }}/>
                </div>

                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Quantity:</h3>
                    <div>
                        <QtySelector qty={qty} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />
                    </div>
                </div>
            </div>

            <InfoBox />

            <div className="mt-8 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-2" onClick={addToCart}>
                    Add To Card
                    <ShoppingCart />
                </Button>
            </div>
        </div>
    )
}


const InfoBox = () => {

    return (
        <div className="w-[400px] border border-gray-300 bg-gray-100 rounded-none p-2 flex gap-2 mt-8 lg:w-4/5">
            <div className="w-[60px] flex justify-center items-start">
                <TruckIcon />
            </div>
            <div className="text-gray-800 text-sm">
                <span className="font-semibold text-md underline">FREE SHIPPING</span> on orders over $49 with an Shopee Membership or orders over $100
            </div>
        </div>
    )
}