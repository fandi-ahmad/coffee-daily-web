import imageExample1 from '../../assets/example-image/3.jpg'

const CartCard = () => {
  return (
    <div className="bg-white overflow-hidden rounded-md flex flex-row mb-3 shadow-soft">
      <img src={imageExample1} alt="ex" className="h-24 max-w-24 min-w-24 object-cover" />

      <div className="w-full flex justify-between p-3">
        <div>
          <p className="pb-3">Ice Coffee Mood Bost</p>
          <b className="text-lg">Rp. 20.000</b>
        </div>

        <div className="flex items-end">
          <div className="flex justify-between items-center">
            <button className="w-7 h-7 text-sm bg-yellow-500 text-white rounded-full">
              <i className="fa-solid fa-minus"></i>
            </button>
            <p className="w-7 text-center font-semibold">2</p>
            <button className="w-7 h-7 text-sm bg-yellow-500 text-white rounded-full">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartCard