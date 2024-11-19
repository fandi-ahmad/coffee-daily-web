import ScreenLayout from "../../../layouts/ScreenLayout"
import CartCard from "../../../components/Cards/CartCard"
import OrderPaymentCard from "../../../components/Cards/OrderPaymentCard"
import { useEffect, useState } from "react"
import cartdata from '../../../example/cartData.json'

interface ProductCartType {
  id: number
  name: string
  price: number
  quantity: number
  topping: null | {
    id: number
    name: string
    price: number
  }
  size: null | {
    id: number
    name: string
    price: number
  }
}

const exampleData = [
  {
    id: 1,
    photo : "image.png",
    name: "white coffee",
    price: 22000,
    quantity: 2,
    topping: {
      id: 1,
      name: "boba",
      price: 2000
    },
    size: {
      id: 2,
      name: "large",
      price: 5000
    },
  },
  {
    id: 1,
    photo : "image.png",
    name: "white coffee",
    price: 22000,
    quantity: 2,
    topping: null,  // karena tidak ada topping
    size: {
      id: 1,
      name: "medium",
      price: 0
    },
  }
]

const Cart = () => {
  const [products, setProducts] = useState<ProductCartType[]>()

  const getDataCart = () => {
    setProducts(cartdata.data)
    console.log('get data');
  }

  useEffect(() => {
    return () => {
      getDataCart()
    }
  }, [])

  return (
    <div className="pt-6">
      <ScreenLayout className="pb-48">
        <h2 className="text-xl font-semibold mb-6" onClick={() => console.log(cartdata.data)}>Cart</h2>

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