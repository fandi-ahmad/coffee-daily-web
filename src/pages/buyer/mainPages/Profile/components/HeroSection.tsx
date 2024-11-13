import ScreenLayout from '../../../../../layouts/ScreenLayout'
import profilePictureExample from '../../../../../assets/example-image/6.jpg'

const HeroSection = () => {
  return (
    <div className="bg-dark-brown-200 text-white py-6">
      <ScreenLayout>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Profile</h2>

          {/* edit button */}
          <button className="text-xl">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        
        <div className="flex flex-row items-center">
          <img src={profilePictureExample} alt="pr" className="w-32 h-32 object-cover rounded-full border-2 border-white" />
          <p className="ms-4 text-4xl">Hi, Fandi Ahmad</p>
        </div>
      </ScreenLayout>
    </div>
  )
}

export default HeroSection
