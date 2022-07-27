import { HeartIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { FavoriteProductsProps, useProduct } from '../ProductFavoriteContext'

interface ProductItemProps {
  product: {
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
}

interface AvailableSizesProps {
  S: number
  G: number
  GG: number
  GGG: number
}

export function ProductItem(props: ProductItemProps) {
  const { handleAddItemToFavoriteProduct } =
    useProduct() as FavoriteProductsProps

  return (
    <div key={props.product.id} className='group relative'>
      <button
        className='absolute z-10 cursor-pointer bg-black rounded-b-full'
        onClick={() => handleAddItemToFavoriteProduct(props.product)}
      >
        <HeartIcon className='w-8 h-8 fill-white' />
      </button>
      <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none'>
        <Image
          src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt={props.product.title}
          className='w-full h-full object-center object-cover lg:w-full lg:h-full'
          width={280}
          height={380}
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <span aria-hidden='true' className='absolute inset-0' />
            {props.product.title}
          </h3>
          <p className='mt-1 text-sm text-gray-500'>{props.product.style}</p>
        </div>
        <p className='text-sm font-medium text-gray-900'>
          {props.product.price}
        </p>
      </div>
    </div>
  )
}
