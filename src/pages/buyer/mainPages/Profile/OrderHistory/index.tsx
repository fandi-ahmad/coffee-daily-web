import ScreenLayout from "@/layouts/ScreenLayout"
import ProductOrderedCard from "@/components/Cards/ProductOrderedCard"
import NavigateButtons from "./components/NavigateButtons"
import TitleHead from "./components/TitleHead"
import useFetch from "@/hooks/useFetch"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { OrderHistoryType } from "@/interface/OrderHistoryType"
import { ApiType } from "@/interface/ApiType"

const OrderHistory = () => {
  const { data, loading, error } = useFetch('/productOrderHistory.json')
  const dataResponse: ApiType = data
  const dataOrder: OrderHistoryType[] = dataResponse?.data
  
  const {status} = useParams()
  const navigate = useNavigate()

  const checkStatus = () => {
    if (status !== 'packaged' && status !== 'delivery' && status !== 'finished' && status !== 'return' && status !== 'canceled') {
      return navigate('/profile')
    }
  }

  useEffect(() => {
    checkStatus()
  }, [status, dataOrder])

  return (
    <>
      <TitleHead/>
      <NavigateButtons/>

      <ScreenLayout className="pt-6">

        {loading && <div>Loading...</div>}
        {error && <div> Error: {error}</div>}

        {dataOrder && dataOrder.map((product: OrderHistoryType, index: number) => (
          <ProductOrderedCard
            key={index}
            name={product.product_name}
            quantity={product.quantity}
            topping={product.topping_name}
            size={product.size_name}
            price={product.total_payment}
            onClick={() => navigate(`/profile/order-history/product/${product.id}`)}
          />
        ))}
      </ScreenLayout>
    </>
  )
}

export default OrderHistory