import formatDotNumber from "../../../../../utils/formatDotNumber"

interface ProductInfoType {
  name: string
  price: number
  address: string
  description?: string
}

const ProductInfo = (props: ProductInfoType) => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-medium'>{props.name}</h2>
        <p className='text-xl font-bold'>Rp. {formatDotNumber(props.price)}</p>
      </div>
      <p className='text-sm'>{props.address}</p>
      <p className='text-sm mt-3'>{props.description}</p>
    </>
  )
}

export default ProductInfo
