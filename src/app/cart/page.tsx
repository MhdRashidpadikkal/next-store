"use client"
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { removeCart } from '@/store/slices/cartSlice'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
    const { cartItems, totalQuantity, subTotal } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch()


    return (
        <div className='pt-24 bg-white pb-10 '>
            {totalQuantity === 0 && (
                <div className='px-10'>
                    <h2 className='text-3xl font-semibold '>Your Cart is Empty 🙂</h2>
                    <button className='bg-secondary text-white rounded-lg py-1 mt-2 px-5'>
                        <Link href='/products'>Explore Products</Link>
                    </button>
                </div>
            )}

            {totalQuantity > 0 && (
                <div className='px-4 md:px-30 flex items-center flex-col gap-4'>
                    {cartItems.map((item) => (
                        <div key={item.id} className='flex items-center md:w-[70%] border-b pb-4 '>
                            <div className='relative w-[200px] h-[100px] mr-4'
                            >
                                <Image
                                    src={`http://localhost:1337${item.image.url}`}
                                    alt={item.name}
                                    fill
                                    className='object-cover rounded-md  '
                                />
                            </div>
                            <div className='flex justify-between w-full'>
                                <div>
                                    <h2>{item.name}</h2>
                                    <p>{item.price} x {item.quantity}</p>
                                    <h2 className='font-semibold'>Total : {item.price * item.quantity}</h2>
                                </div>
                                <div>
                                    <button
                                    className='cursor-pointer'
                                     onClick={() => dispatch(removeCart({id: item.id}))}>
                                    <Trash2 fill='white' stroke='red' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className='flex md:justify-end md:w-[70%]'>
                       <div>
                       <h2 className='text-2xl'>SubTotal : <span className='text-3xl font-semibold'>{subTotal}</span></h2>
                       <button className='w-[232px] py-1 bg-primary text-white rounded-md cursor-pointer'>Checkout</button>
                       </div>
                    </div>
                </div>
            )}
        </div>
    )
}
