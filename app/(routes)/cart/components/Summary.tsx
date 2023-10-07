
import axios from "axios"
import { toast } from 'react-hot-toast'
import { OrderItem } from "@/types"
import useCart from "@/hooks/use-cart"
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import Button from "@/components/ui/Button"
import Currency from "@/components/ui/Currency"

interface SummaryProps {
    orderItems: OrderItem[]
}


export default function Summary({ orderItems }: SummaryProps) {
    const searchParams = useSearchParams();
    const removeAll = useCart((state) => state.removeAll)

    const totalPrice = orderItems.reduce((total, item) => Number(item.product.price) * item.quantity + total, 0)
    const shippingCost = totalPrice > 200 ? 10 : 0

    const onCheckout = async () => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, { orderItems })
                    
            window.location = res.data.url;
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }

    useEffect(() => {
        if (searchParams.get('success')) {
          toast.success('Payment completed');
          removeAll();
        }
    
        if (searchParams.get('canceled')) {
          toast.error('Something went wrong');
        }
    }, [searchParams, removeAll]);


    return (
        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">
                Order Summary
            </h2>

            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-sm font-regular text-gray-900">Subtotal</div>
                    <Currency value={totalPrice} className="font-regular text-sm"/>
                </div>

                <div className="flex items-center justify-between border-gray-200">
                    <div className="text-sm font-regular text-gray-900">Estimated Shipping</div>
                    <Currency value={shippingCost} className="font-regular text-sm"/>
                </div>

                <div className="flex items-center justify-between border-gray-200">
                    <div className="text-sm font-regular text-gray-900">Taxes</div>
                    <Currency value={(totalPrice + shippingCost) * 0.13} className="font-regular text-sm"/>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-lg font-semibold text-gray-900">Total</div>
                    <Currency value={(totalPrice + shippingCost) * 1.13} className="font-semibold text-lg"/>
                </div>
            </div>

            <Button disabled={orderItems.length === 0} className="w-full mt-6" onClick={onCheckout}>
                Checkout
            </Button>
        </div>
    )
}