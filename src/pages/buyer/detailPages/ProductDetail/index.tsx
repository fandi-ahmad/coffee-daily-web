import RectangleButton from '../../../../components/Buttons/RectangleButton'
import RectangleHugButton from '../../../../components/Buttons/RectangleHugButton'
import ScreenLayout from '../../../../layouts/ScreenLayout'
import CoverAndButton from './components/CoverAndButton'
import FavoriteButton from './components/FavoriteButton'
import PaymentMethod from './components/PaymentMethod'
import ProductInfo from './components/ProductInfo'
import TotalPayment from './components/TotalPayment'

import { NotesInput, QuantityCount, SizeOption, ToppingOption } from './components/orderInput'

const ProductDetail = () => {
  return (
    <>
      <CoverAndButton/>

      <div className='bg-white rounded-tl-2xl rounded-tr-2xl -mt-4 relative z-20 p-6 pb-7'>
        <FavoriteButton/>
        <ProductInfo/>
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