import { useNavigate } from "react-router-dom"

interface IconMenuProps {
  text: string
  icon: string
  isActive?: boolean
  to: string
}

const IconMenu = (props: IconMenuProps) => {
  const path = location.pathname
  const navigate = useNavigate()

  const getScrollHeight = () => {
    const root = document.getElementById('root')
    root?.scrollIntoView()
  }

  const movePath = () => {
    navigate(props.to)
    getScrollHeight()
  }

  return (
    <a onClick={movePath} className={`${path === props.to ? 'text-dark-brown-200' : 'text-dark-brown-100'} text-center hover:text-dark-brown-200 duration-200 cursor-pointer`}>
      <i className={`fa-solid ${props.icon} text-2xl`}></i>
      <div className="text-xs">{props.text}</div>
    </a>
  )
}

const BuyerNavbar = () => {
  return (
    <div className="fixed bottom-0 w-full">
      <nav className="bg-white px-6 py-2 max-w-xl mx-auto shadow-soft">
        <div className="grid grid-cols-5">
          <IconMenu to="/" icon="fa-home" text="Home" />
          <IconMenu to="/category" icon="fa-book-open" text="Category" />
          <IconMenu to="/favorite" icon="fa-heart" text="Favorite" />
          <IconMenu to="/cart" icon="fa-cart-shopping" text="Cart" />
          <IconMenu to="/profile" icon="fa-user" text="Profile" />
        </div>
      </nav>
    </div>
  )
}

export default BuyerNavbar