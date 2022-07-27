import { ProductItem } from '../../components/ProductItem'

import { useEffect, useState } from 'react'
import { Header } from 'components/Header'

export interface ProductProps {
  id: number
  sku: number
  title: string
  description: string
  availableSizes: AvailableSizesProps
  style: string
  price: number
  installments: number
  currencyId: string
  currencyFormat: string
  isFreeShipping: boolean
  image: string
}

interface AvailableSizesProps {
  S: number
  G: number
  GG: number
  GGG: number
}

export function ProductList() {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
  }, [])

  return (
    <>
      <Header />
      <div className='bg-white'>
        <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>
            Home
          </h2>

          <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {products.map((product) => {
              return <ProductItem key={product.id} product={product} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}
