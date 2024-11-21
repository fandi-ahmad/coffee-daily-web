import ScreenLayout from "../../../layouts/ScreenLayout"
import CartCard from "../../../components/Cards/CartCard"
import OrderPaymentCard from "../../../components/Cards/OrderPaymentCard"
import { useEffect, useState } from "react"
import { ProductCartType } from "../../../interface/ProductCartType"
import { ApiType } from "../../../interface/ApiType"

const Cart = () => {
  const [products, setProducts] = useState<ProductCartType[]>()
  const [message, setMessage] = useState<string>('')

  const getDataCart = async () => {
    try {
      const response = await fetch('/cartData.json')
      const dataCart: ApiType = await response.json()
      setProducts(dataCart.data)
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
    <div className="pt-6">
      <ScreenLayout className="pb-48">
        <h2 className="text-xl font-semibold mb-6">Cart</h2>

        {message}

        {products && products.map((product, index) => (
          <CartCard
            key={index}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
          />
        ))}

      </ScreenLayout>

      <OrderPaymentCard totalPayment={40000} />
    </div>
  )
}

export default Cart