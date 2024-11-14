import { useState } from "react"

const QuantityCount = () => {
  const [quantity, setQuantity] = useState<number>(1)
  return (
    <div className='flex justify-between mb-2'>
      <p>Quantity</p>
      <div className="flex items-end">
        <div className="flex justify-between items-center">

          <button disabled={quantity === 1} onClick={() => setQuantity(quantity-1)} className="w-7 h-7 text-sm bg-yellow-500 disabled:bg-yellow-300 hover:bg-yellow-600 duration-200 text-white rounded-full">
            <i className="fa-solid fa-minus"></i>
          </button>

          <p className="w-7 text-center font-semibold">
            {quantity}
          </p>
          
          <button onClick={() => setQuantity(quantity+1)} className="w-7 h-7 text-sm bg-yellow-500 hover:bg-yellow-600 duration-200 text-white rounded-full">
            <i className="fa-solid fa-plus"></i>
          </button>

        </div>
      </div>
    </div>
  )
}

export default QuantityCount