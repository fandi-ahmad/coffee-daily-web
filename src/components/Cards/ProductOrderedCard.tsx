import { useState } from 'react'
import imageExample from '../../assets/example-image/4.jpg'
import formatDotNumber from '../../utils/formatDotNumber'

interface ProductOrderedCardType {
  name: string
  price: number
  quantity: number
  topping?: string
  size?: string
  buyerInfo?: string
  onClick?: () => void
  isShowOptionButton?: boolean
}

const ProductOrderedCard = (props: ProductOrderedCardType) => {
  const [isActiveOption, setIsActiveOption] = useState<boolean>(false)

  return (
    <div onClick={props.onClick} className="bg-white overflow-hidden rounded-md flex flex-row mb-3 shadow-soft cursor-pointer">
      <img src={imageExample} alt="ex" className="h-28 max-w-28 min-w-28 object-cover" />

      <div className="w-full flex flex-col p-3">

        <div className='flex justify-between items-start'>
          <div>
            <p className='text-lg font-medium capitalize'>{props.name}</p>
            <small className='capitalize'>{props.topping && props.topping+', '}{props.size}</small>
          </div>

          {props.isShowOptionButton &&
            <button onClick={() => setIsActiveOption(!isActiveOption)}>
              <i className='fa-solid fa-ellipsis text-lg'></i>
            </button>
          }

          {isActiveOption &&
            <div className='absolute flex justify-end w-full pe-44 mt-5'>
              <div className='bg-white shadow-soft w-fit rounded-md overflow-hidden'>
                <div className='px-3 py-1 hover:bg-gray-300 duration-200'>
                  <i className='fa-solid fa-pen-to-square me-2'></i>
                  <span>Update Status</span>
                </div>
                <div className='px-3 py-1 hover:bg-gray-300 duration-200'>
                  <i className='fa-solid fa-trash-can me-2'></i>
                  <span>Delete</span>
                </div>
              </div>
            </div>
          }

        </div>

        <div className="flex justify-between items-end w-full">
          <small className='capitalize'>{props.buyerInfo}</small>
          <div>
            <span>Total {props.quantity} product:</span>
            <b className='text-lg font-bold ms-1'>Rp. {formatDotNumber(props.price)}</b>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductOrderedCard