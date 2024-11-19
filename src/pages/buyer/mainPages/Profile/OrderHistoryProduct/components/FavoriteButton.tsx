import { useState } from "react"

const FavoriteButton = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <button className='text-3xl' onClick={() => setIsActive(!isActive)}>
      {isActive
        ? <i className='fa-solid fa-heart text-red-500'></i>
        : <i className='fa-regular fa-heart'></i>
      }
    </button>
  )
}

export default FavoriteButton