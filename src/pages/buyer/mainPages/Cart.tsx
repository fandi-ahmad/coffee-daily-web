import ScreenLayout from "../../../layouts/ScreenLayout"
import CartCard from "../../../components/Cards/CartCard"
import OrderPaymentCard from "../../../components/Cards/OrderPaymentCard"
import { useState } from "react"

interface ProductCartType {
  id: number
  name: string
  price: number
  quantity: number
}

const exampleData = [
  {
    id: 1,
    name: 'Luwak White coffee',
    price: 20000,
    quantity: 1
  },
  {
    id: 2,
    name: 'volcano choco coffee',
    price: 25000,
    quantity: 1
  },
  {
    id: 3,
    name: 'janji jiwa coffee',
    price: 23000,
    quantity: 2
  }
]

const Cart = () => {
  const [products, setProducts] = useState<ProductCartType[]>(exampleData)

  return (
    <div className="pt-6">
      <ScreenLayout className="pb-48">
        <h2 className="text-xl font-semibold mb-6">Cart</h2>

        {products.map((product) => (
          <CartCard
            key={product.id}
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