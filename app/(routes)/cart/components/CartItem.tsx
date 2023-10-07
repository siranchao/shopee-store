'use client'
import Image from 'next/image'
import { OrderItem } from '@/types'
import Link from 'next/link'
import { useState} from 'react'

import IconBtn from '@/components/ui/IconBtn'
import Currency from '@/components/ui/Currency'
import { X } from 'lucide-react'
import QtySelector from '@/components/ui/QtySelector'


interface CartItemProps {
    item: OrderItem
    removeFromCart: (id: string) => void
    handleIncrease: (id: string) => void
    handleDecrease: (id: string) => void
}

export default function CartItem({ item, removeFromCart, handleIncrease, handleDecrease }: CartItemProps) {
    const [qty, setQty] = useState(item.quantity)

    const onIncrease = () => {
        setQty(prev => prev + 1)
        handleIncrease(item.id)
    }

    const onDecrease = () => {
        if(qty > 1) {
            setQty(prev => prev - 1)
            handleDecrease(item.id)
        }
    }

    return (
        <li className='flex py-6 border-b'>
            <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
                <Link href={`/product/${item.product.id}`}>
                    <Image
                        src={item.product.images[0].url}
                        alt="product image"
                        fill
                        className='object-cover object-center'
                    />
                </Link>
            </div>

            <div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
                <div className='absolute z-10 right-0 top-0'>
                    <IconBtn icon={<X size={15} />} handleClick={() => removeFromCart(item.id)}/>
                </div>
                <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:pr-0'>
                    <div className="">
                        <div className='flex justify-between'>
                            <Link href={`/product/${item.product.id}`} className='text-lg font-semibold text-black hover:underline'>{item.product.name}</Link>
                        </div>

                        <div className='mt-1 flex text-sm items-center'>
                            <p className='text-gray-500 w-1/3'>{item.product.color.name}</p>
                            <p className='text-gray-500 w-1/3 ml-4 border-l border-gray-200 pl-4'>Size: <strong>{item.size.name}</strong></p>
                            <p className='text-gray-500 w-1/3 ml-4 border-l border-gray-200 pl-4'>Qty: <strong>{item.quantity}</strong></p>
                        </div>

                        <div className='mt-2'>
                            <QtySelector qty={qty} handleIncrease={onIncrease} handleDecrease={onDecrease} />
                        </div>
                    </div>
                    
                    <div className='mt-2 sm:flex sm:justify-center sm:mt-1'>
                        <Currency value={Number(item.product.price) * item.quantity} />
                    </div>
                </div>
            </div>
        </li>
    )
}