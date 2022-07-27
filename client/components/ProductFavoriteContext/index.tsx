import { createContext, ReactNode, useContext, useState } from 'react'

interface ProductContextType {
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

export interface FavoriteProductsProps {
  favoriteProduct: ProductContextType[]
  handleAddItemToFavoriteProduct: (product: ProductContextType) => void
  handleRemoveItemToFavoriteProduct: (id: number) => void
}

const productContextDefaultValues: FavoriteProductsProps = {
  favoriteProduct: [
    {
      id: 0,
      sku: 0,
      title: '',
      description: '',
      availableSizes: {
        S: 0,
        G: 0,
        GG: 0,
        GGG: 0
      },
      style: '',
      price: 0,
      installments: 0,
      currencyId: '',
      currencyFormat: '',
      isFreeShipping: false,
      image: ''
    }
  ],
  handleAddItemToFavoriteProduct: () => {},
  handleRemoveItemToFavoriteProduct: () => {}
}

const ProductFavoriteContext = createContext<FavoriteProductsProps | null>(
  productContextDefaultValues
)

export function useProduct() {
  return useContext(ProductFavoriteContext)
}

type Props = {
  children: ReactNode
}

export function ProductFavoriteProvider({ children }: Props) {
  const [favoriteProduct, setFavoriteProduct] = useState<ProductContextType[]>(
    []
  )

  const handleAddItemToFavoriteProduct = (atualProduct: ProductContextType) => {
    const found = favoriteProduct.find(
      (element) => element.id === atualProduct.id
    )

    if (found) {
      return
    } else {
      const newFavoriteProduct: ProductContextType = {
        id: atualProduct.id,
        sku: atualProduct.sku,
        title: atualProduct.title,
        description: atualProduct.description,
        availableSizes: {
          S: atualProduct.availableSizes.S,
          G: atualProduct.availableSizes.G,
          GG: atualProduct.availableSizes.GG,
          GGG: atualProduct.availableSizes.GGG
        },
        style: atualProduct.style,
        price: atualProduct.price,
        installments: atualProduct.installments,
        currencyId: atualProduct.currencyId,
        currencyFormat: atualProduct.currencyFormat,
        isFreeShipping: atualProduct.isFreeShipping,
        image: atualProduct.image
      }

      setFavoriteProduct([...favoriteProduct, newFavoriteProduct])
    }
  }

  const handleRemoveItemToFavoriteProduct = (id: number) => {
    const filteredFavoriteProduct = favoriteProduct.filter(
      (productItem) => productItem.id !== id
    )
    setFavoriteProduct(filteredFavoriteProduct)
  }

  return (
    <ProductFavoriteContext.Provider
      value={{
        favoriteProduct,
        handleAddItemToFavoriteProduct,
        handleRemoveItemToFavoriteProduct
      }}
    >
      {children}
    </ProductFavoriteContext.Provider>
  )
}
