import { Link } from 'react-router-dom'
import imageExample from '../../assets/example-image/4.jpg'
import formatDotNumber from '../../utils/formatDotNumber'

interface ProductHistoryCardType {
  name: string
  price: number
  quantity: number
  topping?: string
  size?: string
  to: string
}

const ProductHistoryCard = (props: ProductHistoryCardType) => {
  return (
    <Link to={props.to} className="bg-white overflow-hidden rounded-md flex flex-row mb-3 shadow-soft">
      <img src={imageExample} alt="ex" className="h-28 max-w-28 min-w-28 object-cover" />

      <div className="w-full flex flex-col p-3">
        <div>
          <p className='text-lg font-medium'>{props.name}</p>
          <small className='capitalize'>{props.topping && props.topping+', '}{props.size}</small>
        </div>

        <div className="flex justify-end items-end w-full">
          <span>Total {props.quantity} product:</span>
          <b className='text-lg font-bold ms-1'>Rp. {formatDotNumber(props.price)}</b>
        </div>

      </div>
    </Link>
  )
}

export default ProductHistoryCard