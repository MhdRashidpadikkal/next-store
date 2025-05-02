import Image from 'next/image'
import React from 'react'

export default function Featured() {
    const categories = [
        { name: "Living Room", image: "https://png.pngtree.com/background/20240112/original/pngtree-dark-luxurious-modern-living-room-interior-design-3d-render-picture-image_7229003.jpg" },
        { name: "Bedroom", image: "https://img.freepik.com/premium-photo/night-scene-modern-style-luxury-black-master-bedroom-with-city-view-3d-render_487103-916.jpg?semt=ais_hybrid&w=740" },
        { name: "Kitchen", image: "https://png.pngtree.com/thumb_back/fh260/background/20230615/pngtree-modern-and-luxurious-kitchen-in-black-a-stunning-3d-render-image_3620371.jpg" },
        { name: "Office", image: "https://cdn.credaily.com/uploads/2025/01/Article-Images-84-png.webp" },
        { name: "Outdoor", image: "https://img.fruugo.com/product/9/19/246870199_max.jpg" },
    ]
    return (
        <div className='my-5 px-2 md:px-10'>
            <h2 className='sm:text-3xl font-semibold text-primary '>Explore Our Collections</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-1 sm:mt-3  '>
                {categories.map((category, index) => (
                    <div key={index} className=' flex flex-col items-center justify-center gap-2 cursor-pointer '>
                        <Image src={category.image} alt={category.name} width={200} height={200} className=' w-52 h-44 rounded-lg object-cover' />
                        {/* <Image src={category.image} alt={category.name} className=' w-52 h-44 rounded-lg object-cover' /> */}
                        <h3 className='md:text-xl font-semibold text-nowrap'>{category.name}</h3>
                    </div>
                ))}
            </div>

        </div>
    )
}
