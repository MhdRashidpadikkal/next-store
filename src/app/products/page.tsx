
import { fetchAllProducts } from '@/lib/api'
import { Product } from '@/types/product'
import React from 'react'
import ProductList from './ProductList'

export default async function ProductPage() {
  const products: Product[] = await fetchAllProducts()

  return (
    <div className='mt-20' >
      
      <ProductList products={products} />
    </div>
      )
}
