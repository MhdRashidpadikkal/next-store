import Image from 'next/image';
import React from 'react'

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description?: string;
  badge?: string;
}


export default function TrendingProduct() {

  const products: Product[] = [
    {
      id: 1,
      name: 'Velora Luxe Sofa',
      image: 'https://images.pexels.com/photos/7535028/pexels-photo-7535028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 33990,
      description: "Plush velvet 3-seater with gold metal legs, perfect for modern living rooms.",
      badge: "Hot"
    },
    {
      id: 2,
      name: 'Aurora LED Mirror',
      image: 'https://images.pexels.com/photos/7005708/pexels-photo-7005708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 19990,
      description: "Illuminated mirror with touch controls, ideal for bathrooms and dressing areas.",

    },
    {
      id: 3,
      name: 'Casa Comfy Armchair',
      image: 'https://images.pexels.com/photos/6707630/pexels-photo-6707630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 12990,
      description: "Stylish armchair with soft fabric and ergonomic design, perfect for reading nooks.",
      badge: "Best Seller"
    },
    {
      id: 4,
      name: 'Nordic Nesting Tables',
      image: 'https://images.pexels.com/photos/20604655/pexels-photo-20604655/free-photo-of-a-table-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 29990,
      description: "Set of 3 Scandinavian-style tables, perfect for small spaces and living rooms.",
      badge: "New"
    },
    {
      id: 5,
      name: 'Oakline Dining Set ',
      image: 'https://images.pexels.com/photos/271696/pexels-photo-271696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 49990,
      description: "Elegant oak dining table with 4 matching chairs, perfect for family meals.",
      badge: "Limited Edition"
    },
    {
      id: 6,
      name: 'Zen Floor Lamp',
      image: 'https://images.pexels.com/photos/31153872/pexels-photo-31153872/free-photo-of-traditional-japanese-room-with-tatami-and-lamp.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 1990,
      description: "Minimalist floor lamp with warm light, perfect for creating a cozy atmosphere.",
      badge: "Best Seller" 
    },
    {
      id: 7,
      name: 'Aria Wall Shelf Set',
      image: 'https://images.pexels.com/photos/15385812/pexels-photo-15385812/free-photo-of-closets-and-drawers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 20990,
      description: "Set of 3 wall shelves in different sizes, perfect for displaying decor.",
      badge: "Hot"
    }
  ]

  return (
    <div className='md:px-5'>
      <h2 className='sm:text-3xl font-semibold text-primary ml-3'>
        Trending Products 
      </h2>

      <div className='flex overflow-auto space-x-4 p-4'>
        {
          products.map((products) => {
            return (
              <div key={products.id} className="relative flex-shrink-0 flex flex-col items-center justify-start  w-[90%] sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/5 border rounded-lg shadow-md bg-white pb-3 ">
                <Image src={products.image} alt={products.name} width={350} height={250} className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-lg font-semibold mt-2">{products.name}</h3>
                <span className="text-xl font-bold text-primary">${products.price}</span>
                <p className="text-gray-600 px-2">{products.description}</p>
                {products.badge && <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs absolute left-0 ">{products.badge}</span>}
                <button className='bg-yellow-400 px-4 rounded-md py-1 mt-2 font-medium cursor-pointer hover:bg-yellow-500 transition-all ease-in-out'>Add to cart</button>
              </div>
            )
          })
        }
      </div>


    </div>
  )
}
