import { Link } from 'react-router-dom'
import cupCoffeeImage from '../../../assets/images/cup-of-coffee.jpeg'
import ScreenLayout from '../../../layouts/ScreenLayout'

const SignIn = () => {
  return (
    <>
      <img src={cupCoffeeImage} className='w-full h-72 object-cover' />

      <div className='bg-white rounded-tl-2xl rounded-tr-2xl -mt-10 relative z-20 p-6 pb-7'>
        <ScreenLayout>
          <h1 className='text-3xl mb-12'>Sign In</h1>

          <div className='flex flex-row items-center w-full mb-2'>
            <i className='fa-solid fa-envelope text-xl'></i>
            <input type="text" placeholder='Enter Your Email' className='outline-none w-full ms-3 placeholder:text-dark-brown-100' />
          </div>
          <hr className='border-dark-brown-200 rounded-full mb-6' style={{borderWidth: '1px'}} />

          <div className='flex flex-row items-center w-full mb-2'>
            <i className='fa-solid fa-lock text-xl'></i>
            <input type="password" placeholder='Enter Your Password' className='outline-none w-full ms-3 placeholder:text-dark-brown-100' />
          </div>
          <hr className='border-dark-brown-200 rounded-full mb-6' style={{borderWidth: '1px'}} />

          <Link to={'/forgot-password'} className='hover:underline duration-200'>Forgot Password?</Link>

          <button className='text-2xl p-3 bg-dark-brown-200 hover:bg-dark-brown-100 duration-200 rounded-full text-white w-full mt-12'>
            Sign In
          </button>

          <p className='mt-3 text-center'>Don't have an account? <Link to={'/sign-up'} className='font-bold hover:underline duration-200'>Sign Up</Link></p>


        </ScreenLayout>
      </div>

      
    </>
  )
}

export default SignIn