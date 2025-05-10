'use client'

import { useRouter } from 'next/navigation'
import { Product } from '@/types/product'
import Image from 'next/image'
import { useAppDispatch } from '@/store/hook'
import { addToCart } from '@/store/slices/cartSlice'



export default function ProductList({ products }: { products: Product[] }) {
    const router = useRouter()
    const dispatch = useAppDispatch()


    const handleClick = (slug: string) => {
        router.push(`/products/${slug}`)
    }

    return (
        <div className='flex flex-col '>
            {products.map((product) => (
                <div
                    key={product.id}
                    className='border p-4 md:px-20 cursor-pointer flex bg-white'

                >
                    <div className='relative w-[200px] md:w-[300px] md:h-[300px] mr-4'
                        onClick={() => handleClick(product.slug)}
                    >
                        <Image
                            src={product.image.url}
                            alt={product.name}
                            fill
                            className='object-cover rounded-md  '
                        />
                    </div>
                    <div className='flex flex-col flex-1 '>
                        <h3 className='md:text-2xl font-semibold text-primary'
                            onClick={() => handleClick(product.slug)}
                        >{product.name}</h3>
                        <p className='text-sm text-gray-500'>{product.category}</p>
                        <p className='md:pr-20 mt-2 hidden md:flex'>{product.description}</p>
                        <p className='text-2xl md:text-3xl font-semibold mt-1 md:mt-3 '><span className='text-[22px]'>₹</span> {product.price}</p>
                        <button 
                        onClick={() => dispatch(addToCart(product))}
                        className=' w-[150px] text-sm md:text-base mt-1 md:mt-3 rounded-xl bg-primary hover:bg-secondary cursor-pointer text-white md:py-1'>Add to Cart</button>
                        <button className='border w-[150px] text-sm md:text-base mt-2 md:mt-3 rounded-2xl bg-[brown] hover:bg-secondary cursor-pointer text-white md:py-1'>Buy Now</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
