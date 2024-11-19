import { Link } from 'react-router-dom'
import imageExample from '../../assets/example-image/4.jpg'
import formatDotNumber from '../../utils/formatDotNumber'

interface ProductHistoryCardType {
  name: string
  username_seller: string
  address: string
  price: number
  to: string
}

const ProductHistoryCard = (props: ProductHistoryCardType) => {
  return (
    <Link to={props.to} className="bg-white overflow-hidden rounded-md flex flex-row mb-3 shadow-soft">
      <img src={imageExample} alt="ex" className="h-24 max-w-24 min-w-24 object-cover" />

      <div className="w-full flex flex-col p-3">
        <p className='mb-4'>{props.name}</p>

        <div className="flex justify-between items-end w-full">
          <p className='text-sm'>{props.username_seller} - {props.address}</p>
          <p className='text-lg font-bold'>Rp. {formatDotNumber(props.price)}</p>
        </div>

      </div>
    </Link>
  )
}

export default ProductHistoryCard