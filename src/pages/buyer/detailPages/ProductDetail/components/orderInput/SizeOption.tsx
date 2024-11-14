import { useState } from 'react'
import RoundedButton from '../../../../../../components/Buttons/RoundedButton'
import formatNumberToK from '../../../../../../utils/formatNumberToK'

interface SizeType {
  id: number
  name: string
  price: number
}

const exampleSize = [
  {
    id: 1,
    name: 'small',
    price: 0
  },
  {
    id: 2,
    name: 'medium',
    price: 5000
  },
  {
    id: 3,
    name: 'large',
    price: 7000
  },
]

const SizeOption = () => {
  const [sizeData, setSizeData] = useState<SizeType[]>(exampleSize)
  const [sizeId, setSizeId] = useState<number|null>(null)

  return (
    <>
      <h2 className='text-xl font-medium mt-6'>Size</h2>

      <div className='mt-3 flex flex-wrap gap-3'>
      
        {sizeData.map((size: SizeType) => (
          <RoundedButton
            className='border-2 border-brown-300'
            isNoShadow
            key={size.id}
            onClick={() => setSizeId(size.id)}
            isActive={size.id === sizeId}
          >
            {size.name} <b>{formatNumberToK(size.price)}</b>
          </RoundedButton>
        ))}

      </div>
    </>
  )
}

export default SizeOption
