import imageExample from '../../assets/example-image/4.jpg'

const ProductHistoryCard = () => {
  return (
    <div className="bg-white overflow-hidden rounded-md flex flex-row mb-3 shadow-soft">
      <img src={imageExample} alt="ex" className="h-24 max-w-24 min-w-24 object-cover" />

      <div className="w-full flex flex-col p-3">
        <p className='mb-4'>Ice Coffee Mood Bost</p>

        <div className="flex justify-between items-end w-full">
          <p className='text-sm'>Mid Cafe - Palu Barat</p>
          <p className='text-lg font-bold'>Rp. 20.000</p>
        </div>

      </div>
    </div>
  )
}

export default ProductHistoryCard