import { fetchAllProducts, fetchAllProductsBySlug } from '@/lib/api'
import { Product } from '@/types/product'
import Image from 'next/image'
import React from 'react'

type Props = {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const products: Product[] = await fetchAllProducts();

    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function page({ params }: Props) {
    const { slug } = await params
    const currentProduct: Product[] = await fetchAllProductsBySlug(slug);

    return (
        <div className='mt-20'>
            {
                currentProduct.map((product) => (
                    <div key={product.id}
                        className='flex px-2 md:px-32 flex-col md:flex-row '
                    >
                        <div className='relative w-full md:w-[500px] h-[300px] md:h-[500px] mr-4'>
                            <Image
                                src={`http://localhost:1337${product.image.url}`}
                                alt={product.name}
                                fill
                                className='object-cover rounded-md '
                            />
                        </div>
                        <div className='flex flex-col md:justify-center flex-1'>

                            <h3 className='md:text-2xl font-semibold text-primary'>{product.name}</h3>
                            <p className='text-sm text-gray-500'>{product.category}</p>
                            <p className='md:pr-20 mt-2'>{product.description}</p>
                            <p className='text-2xl md:text-3xl font-semibold mt-1 md:mt-3 '><span className='text-[22px]'>₹</span> {product.price}</p>
                            <button className=' w-[150px] text-sm md:text-base mt-3 rounded-xl bg-primary hover:bg-secondary cursor-pointer text-white py-1'>Add to Cart</button>
                            <button className='border w-[150px] text-sm md:text-base mt-3 rounded-2xl bg-[brown] hover:bg-secondary cursor-pointer text-white py-1'>Buy Now</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
