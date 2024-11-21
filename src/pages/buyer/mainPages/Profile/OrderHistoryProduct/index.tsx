import ScreenLayout from "@/layouts/ScreenLayout"
import CoverAndButton from "./components/CoverAndButton"
import DetailInfo from "./components/DetailInfo"
import FavoriteButton from "./components/FavoriteButton"
import LiveViewButton from "./components/LiveViewButton"
import ProductInfo from "./components/ProductInfo"
import useFetch from "@/hooks/useFetch"
import { useNavigate, useParams } from "react-router-dom"
import { OrderHistoryType } from "@/interface/OrderHistoryType"
import { ApiType } from "@/interface/ApiType"
import { useEffect } from "react"

const OrderHistoryProduct = () => {
  const {id_product_order}: any = useParams()
  const navigate = useNavigate()

  const { data, loading, error } = useFetch(`/api/product/order/detail/${id_product_order}.json`)
  const dataResponse: ApiType = data
  const dataOrder: OrderHistoryType = dataResponse?.data

  useEffect(() => {
    console.log({id_product_order, dataOrder, data, dataResponse}, '<-- data json');
    
    if (dataResponse && dataResponse.status === 404) {
      navigate('/profile')
    } else if (dataOrder && id_product_order != dataOrder.id) {
      navigate('/profile')
    } else {
      console.log('data ditemukan');
    }

  }, [data, dataOrder])


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
