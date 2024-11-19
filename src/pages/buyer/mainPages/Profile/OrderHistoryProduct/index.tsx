import ScreenLayout from "../../../../../layouts/ScreenLayout"
import CoverAndButton from "./components/CoverAndButton"
import DetailInfo from "./components/DetailInfo"
import FavoriteButton from "./components/FavoriteButton"
import LiveViewButton from "./components/LiveViewButton"
import ProductInfo from "./components/ProductInfo"

const OrderHistoryProduct = () => {
  return (
    <>
      <CoverAndButton/>

      <div className='bg-white rounded-tl-2xl rounded-tr-2xl -mt-4 relative z-20 p-6 pb-7'>
        <div className='w-full flex justify-between mb-3'>
          <LiveViewButton/>
          <FavoriteButton/>
        </div>
        <ProductInfo/>
      </div>

      <ScreenLayout className="bg-white pb-6">
        <DetailInfo title="topping" text="caramel" value={'Rp. 2.000'} />
        <DetailInfo title="size" text="medium" value={'Rp. 0'} />
        <DetailInfo text="quantity" value={'2'} />
        <DetailInfo text="payment method" value={'cash'} />
        <DetailInfo text="total payment" value={'Rp. 22.000'} />
      </ScreenLayout>
    </>
  )
}

export default OrderHistoryProduct
