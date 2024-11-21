import { useEffect, useState } from 'react'
import RectangleButton from '../../../../components/Buttons/RectangleButton'
import RectangleHugButton from '../../../../components/Buttons/RectangleHugButton'
import ScreenLayout from '../../../../layouts/ScreenLayout'
import CoverAndButton from './components/CoverAndButton'
import FavoriteButton from './components/FavoriteButton'
import PaymentMethod from './components/PaymentMethod'
import ProductInfo from './components/ProductInfo'
import TotalPayment from './components/TotalPayment'
import { NotesInput, QuantityCount, SizeOption, ToppingOption } from './components/orderInput'
import { ProductCartType } from '../../../../interface/ProductCartType'
import { ApiType } from '../../../../interface/ApiType'

const ProductDetail = () => {
  const [products, setProducts] = useState<ProductCartType>()
  const [message, setMessage] = useState<string>('')

  const getDataCart = async () => {
    try {
      const response = await fetch('/cartById.json')
      const dataCart: ApiType = await response.json()
      setProducts(dataCart.data)
      console.log(dataCart.data);
      
    } catch (error) {
      setMessage('Ups, Something Wrong!')
    }
  }

  useEffect(() => {
    return () => {
      getDataCart()
    }
  }, [])

  return (
    <>
      <CoverAndButton/>

      <div className='bg-white rounded-tl-2xl rounded-tr-2xl -mt-4 relative z-20 p-6 pb-7'>
        <FavoriteButton/>
        {products &&
          <ProductInfo
            name={products.name}
            price={products.price}
            address={''}
            description={products.description}
          />
        }
      </div>

      <ScreenLayout className='bg-white pb-6'>
        <ToppingOption/>
        <SizeOption/>
        <NotesInput/>
        <hr className='border-dark-brown-100 mb-3' />
        <QuantityCount/>

        <TotalPayment/>
        <PaymentMethod/>

        <div className='mt-6 flex flex-row'>
          <RectangleHugButton className='me-6'>
            <i className='fa-solid fa-cart-shopping'></i>
            <p className='ps-2 w-28'>Add to Cart</p>
          </RectangleHugButton>

          <RectangleButton>Order Now</RectangleButton>
        </div>
      </ScreenLayout>
    </>
  )
}

export default ProductDetail