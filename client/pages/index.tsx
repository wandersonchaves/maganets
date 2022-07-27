import type { NextPage } from 'next'
import { Footer } from 'components/Footer'
import { Title } from 'components/Title'
import { ProductList } from './ProductList'

const Home: NextPage = () => {
  return (
    <>
      <Title />

      <ProductList />

      <Footer />
    </>
  )
}

export default Home
