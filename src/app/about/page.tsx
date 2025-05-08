import { OurJourney } from '@/components/about/OurJourney'
import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <div className='mt-13'>
            <div 
            style={{ backgroundImage: "url('/images/about/about-bg2.jpg')" }}
            className='flex h-[500px] bg-cover bg-center bg-no-repeat w-full'>
                <div className='flex flex-col justify-center items-center text-white backdrop-blur-[5px]  '>
                    <h1 className='text-2xl md:text-5xl font-semibold text-[#ffffff]   ' > About Us – Next Store</h1>
                    <h2 className='md:text-3xl text-[#dd243d] font-semibold md:mt-2 '>Design Your Dream Space with Next Store</h2>
                    <p className=' text-sm md:text-[18px] mt-2 text-wrap px-5 md:px-20'>Welcome to Next Store – your go-to destination for modern, curated living. We believe that a beautiful home isn’t a luxury — it’s a lifestyle. Whether you're revamping your living room or finding the perfect accent piece, 
                        Next Store is here to inspire, guide, and deliver.</p>
                </div>
            </div>


            {/* vision */}
            <div className='flex justify-center md:pt-5 '> 
                <div className='flex flex-col md:flex-row bg-white md:rounded-tl-[100px] md:rounded-br-[100px] md:rounded-bl-[10px] md:rounded-tr-[10px] '>
                    <div className='rounded-tl-md'>
                        <Image
                            src="/images/about/vision.png"
                            width={500}
                            height={500}
                            alt="Vision"
                            className="w-full h-[300px] object-cover md:rounded-tl-[100px] "
                        />
                    </div>
                    <div className='rounded-br-2xl md:w-[400px] flex flex-col justify-center px-3 py-3'>
                        <h2 className='text-2xl font-semibold'>Our Vision</h2>
                        <p>To transform everyday spaces into inspiring,
                             personalized sanctuaries by offering accessible, stylish, and quality home décor.</p>
                    </div>
                </div> 
            </div>

            {/* journey */}
            <OurJourney />

            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 mt-5 px-3 lg:px-20'>
                <div className='bg-white rounded-lg px-5 py-8 text-[20px]  font-semibold text-center '>📦 Fast Delivery</div>
                <div className='bg-white rounded-lg px-5 py-8 text-[20px] font-semibold text-center '>🔁 Easy Returns</div>
                <div className='bg-white rounded-lg px-5 py-8 text-[20px] font-semibold text-center '>💬 Friendly Support</div>
                <div className='bg-white rounded-lg px-5 py-8 text-[20px] font-semibold text-center '>🌱 Sustainable Choices</div>
            </div>

        </div>
    )
}
