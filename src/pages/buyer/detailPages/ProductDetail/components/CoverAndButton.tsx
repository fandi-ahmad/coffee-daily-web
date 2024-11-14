import exampleImage from '../../../../../assets/example-image/1.jpg'
import CircleButton from '../../../../../components/Buttons/CircleButton'

const CoverAndButton = () => {
  return (
    <>
      <img src={exampleImage} alt="ex" className='w-full h-64 object-cover' />
        
      <CircleButton className='absolute top-6 left-6'>
        <i className='fa-solid fa-arrow-left'></i>
      </CircleButton>

      <CircleButton className='absolute top-6 right-6'>
        <i className='fa-solid fa-share'></i>
      </CircleButton>  
    </>
  )
}

export default CoverAndButton
