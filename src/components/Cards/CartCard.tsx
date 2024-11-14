import { useState } from 'react'
import imageExample1 from '../../assets/example-image/3.jpg'
import formatDotNumber from '../../utils/formatDotNumber'

interface CartCardType {
  name: string
  price: number
  quantity: number
}

const CartCard = (props: CartCardType) => {
  const [quantity, setQuantity] = useState<number>(props.quantity)

  return (
    <div className="bg-white overflow-hidden rounded-md flex flex-row mb-3 shadow-soft">
      <img src={imageExample1} alt="ex" className="h-24 max-w-24 min-w-24 object-cover" />

      <div className="w-full flex justify-between p-3">
        <div>
          <p className="pb-3 capitalize">{props.name}</p>
          <b className="text-lg">Rp. {formatDotNumber(props.price)}</b>
        </div>

        <div className="flex items-end">
          <div className="flex justify-between items-center">
            
            <button disabled={quantity === 1} onClick={() => setQuantity(quantity-1)} className="w-7 h-7 text-sm bg-yellow-500 disabled:bg-yellow-300 hover:bg-yellow-600 duration-200 text-white rounded-full">
              <i className="fa-solid fa-minus"></i>
            </button>
            
            <p className="w-7 text-center font-semibold">{quantity}</p>
            
            <button onClick={() => setQuantity(quantity+1)} className="w-7 h-7 text-sm bg-yellow-500 hover:bg-yellow-600 duration-200 text-white rounded-full">
              <i className="fa-solid fa-plus"></i>
            </button>
          
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartCard