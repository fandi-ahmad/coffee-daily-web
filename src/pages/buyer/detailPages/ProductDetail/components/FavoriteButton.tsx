import { useState } from "react"

const FavoriteButton = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <div className='w-full flex justify-end mb-3'>
      <button className='text-3xl' onClick={() => setIsActive(!isActive)}>
        {isActive
          ? <i className='fa-solid fa-heart text-red-500'></i>
          : <i className='fa-regular fa-heart'></i>
        }
      </button>
    </div>
  )
}

export default FavoriteButton