import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ProductFavoriteProvider } from '@/components/ProductFavoriteContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductFavoriteProvider>
      <Component {...pageProps} />
    </ProductFavoriteProvider>
  )
}

export default MyApp
