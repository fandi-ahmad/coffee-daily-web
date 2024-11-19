import { useState } from 'react'
import imageExample1 from '../../assets/example-image/3.jpg'
import formatDotNumber from '../../utils/formatDotNumber'
import OperationButton from '../Buttons/OperationButton'
import { Link } from 'react-router-dom'

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

      <div className="w-full flex flex-col justify-between p-3">
        <div className='w-full flex justify-between'>
          <p className="capitalize">{props.name}</p>

          <button className='hover:text-red-500 duration-200'>
            <i className='fa-solid fa-trash'></i>
          </button>
        </div>

        <div className='flex justify-between'>
          <b className="text-lg">Rp. {formatDotNumber(props.price)}</b>

          <div className="flex items-end">
            <div className="flex justify-between items-center">              
              <OperationButton icon='fa-minus' onClick={() => setQuantity(quantity-1)} disabled={quantity === 1} />
                <p className="w-7 text-center font-semibold">{quantity}</p>
              <OperationButton icon='fa-plus' onClick={() => setQuantity(quantity+1)} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartCard