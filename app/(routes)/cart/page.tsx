'use client';
import useCart from '@/hooks/use-cart';
import Container from '@/components/ui/Container';
import CartItem from './components/CartItem';
import Summary from './components/Summary';
import Button from '@/components/ui/Button';

import { useState, useEffect } from 'react';

export default function CartPage() {
    const [mounted, setMounted] = useState(false)
    const [actionCount, setActionCount] = useState(0)

    //retrieve global cart state
    const cart = useCart()

    const removeFromCart = (id: string) => {
        cart.removeFromCart(id)
        setActionCount(prev => prev + 1)
    }

    const handleIncrease = (id: string) => {
        cart.increaseQty(id)
        setActionCount(prev => prev + 1)
    }

    const handleDecrease = (id: string) => {
        cart.decreaseQty(id)
        setActionCount(prev => prev + 1)
    }

    const handleRemoveAll = () => {
        cart.removeAll()
        setActionCount(prev => prev + 1)
    }

    useEffect(() => {
       setMounted(true) 
    }, [])

    if(!mounted) return null

    return (
        <>
            <div className='bg-white'>
                <Container>
                    <div className='px-4 py-16 sm:px-6 lg:px-8'>
                        <h1 className='text-3xl font-bold text-black'>Shopping Cart</h1>
                        <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
                            <div className='lg:col-span-7'>
                                {cart.items.length === 0 ? (
                                    <p className='text-neutral-500'>Your cart is empty, try adding something</p>
                                ) : (
                                    <>
                                        <ul>
                                            {cart.items.map((item, index) => (
                                                <CartItem 
                                                    key={index} 
                                                    item={item} 
                                                    removeFromCart={removeFromCart}
                                                    handleIncrease={handleIncrease}
                                                    handleDecrease={handleDecrease}
                                                />
                                            ))}
                                        </ul>
                                        <div className='flex justify-end mt-4'>
                                            <Button 
                                                className='bg-white rounded-md border border-red-500 text-red-500 px-2 py-1'
                                                onClick={handleRemoveAll}
                                            >
                                                Empty Cart
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </div>

                            <Summary orderItems={cart.items} />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}