import exampleImage from '../../../assets/example-image/1.jpg'
import CircleButton from '../../../components/Buttons/CircleButton'
import RoundedButton from '../../../components/Buttons/RoundedButton'
import ScreenLayout from '../../../layouts/ScreenLayout'

const ProductDetail = () => {
  return (
    <>
      <div>
        <img src={exampleImage} alt="ex" className='w-full h-64 object-cover' />
        
        <CircleButton className='absolute top-6 left-6'>
          <i className='fa-solid fa-arrow-left'></i>
        </CircleButton>

        <CircleButton className='absolute top-6 right-6'>
          <i className='fa-solid fa-share'></i>
        </CircleButton>

        <div className='bg-white rounded-tl-2xl rounded-tr-2xl -mt-4 relative z-20 p-6 pb-7'>

          <div className='w-full flex justify-end mb-3'>
            <button className='text-3xl'>
              <i className='fa-regular fa-heart'></i>
            </button>
          </div>

          <div className='flex justify-between items-center'>
            <h2 className='text-xl font-medium'>Ice Coffee Mood Booster</h2>
            <p className='text-xl font-bold'>Rp. 20.000</p>
          </div>
          <p className='text-sm'>Mid Cafe, Palu Barat</p>
          <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio. Perferendis temporibus rerum soluta itaque incidunt magni atque nesciunt quasi?</p>
        
        </div>


        <ScreenLayout className='bg-white pb-6'>
          <h2 className='text-xl font-medium'>Topping</h2>

          <div className='mt-3 flex flex-wrap gap-3'>
            <RoundedButton className='border-2 border-dark-brown-200'>None</RoundedButton>
            <RoundedButton className='border-2 border-dark-brown-200'>Caramel <b>+ 2K</b></RoundedButton>
            <RoundedButton className='border-2 border-dark-brown-200'>Oreo <b>+ 2K</b></RoundedButton>
          </div>

          <h2 className='text-xl font-medium mt-6'>Size</h2>

          <div className='mt-3 flex flex-wrap gap-3'>
            <RoundedButton className='border-2 border-dark-brown-200'>Medium</RoundedButton>
            <RoundedButton className='border-2 border-dark-brown-200'>Large <b>+ 5K</b></RoundedButton>
          </div>

          <h2 className='mt-6'>Notes for Ordering</h2>
          <input type="text" placeholder='Optional' className='outline-none my-2' />

          <hr className='border-dark-brown-100 mb-3' />

          <div className='flex justify-between mb-2'>
            <p>Quantity</p>
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

          <div className='flex justify-between mb-2'>
            <p>Total Payment</p>
            <p className='text-xl font-bold'>Rp. 20.000</p>
          </div>

          <div className='flex justify-between mb-2'>
            <p>Payment Method</p>
            <div className='flex flex-row items-center'>
              <p className='me-2'>Cash</p>
              <i className='fa-solid fa-chevron-down'></i>
            </div>
          </div>

          <div className='mt-6 flex flex-row'>
            <button className='bg-dark-brown-200 hover:bg-dark-brown-100 duration-200 text-white rounded-md flex flex-row items-center p-3'>
              <i className='fa-solid fa-cart-shopping'></i>
              <p className='ps-2 w-28'>Add to Cart</p>
            </button>

            <button className='bg-yellow-500 hover:bg-yellow-400 duration-200 text-white rounded-md p-3 w-full ms-6'>
              Order Now
            </button>

          </div>


        </ScreenLayout>


        
      </div>
    </>
  )
}

export default ProductDetail