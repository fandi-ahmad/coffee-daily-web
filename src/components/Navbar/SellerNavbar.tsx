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

  const movePath = () => {
    navigate(props.to)
    document.getElementById('root')?.scrollIntoView()
  }

  if (props.to === '/seller') {
    return (
      <a onClick={movePath} className={`${path === '/seller' || path.includes('/seller/product-order-history') ? 'text-dark-brown-200' : 'text-dark-brown-100'} text-center hover:text-dark-brown-200 duration-200 cursor-pointer`}>
        <i className={`fa-solid ${props.icon} text-2xl`}></i>
        <div className="text-xs">{props.text}</div>
      </a>
    )
  } else if (props.to === '/seller/sales/packaged') {
    return (
      <a onClick={movePath} className={`${path.includes('/seller/sales') ? 'text-dark-brown-200' : 'text-dark-brown-100'} text-center hover:text-dark-brown-200 duration-200 cursor-pointer`}>
        <i className={`fa-solid ${props.icon} text-2xl`}></i>
        <div className="text-xs">{props.text}</div>
      </a>
    )
  } else {
    return (
      <a onClick={movePath} className={`${path === props.to || path.includes(props.to) ? 'text-dark-brown-200' : 'text-dark-brown-100'} text-center hover:text-dark-brown-200 duration-200 cursor-pointer`}>
        <i className={`fa-solid ${props.icon} text-2xl`}></i>
        <div className="text-xs">{props.text}</div>
      </a>
    )
  }

}

const SellerNavbar = () => {
  return (
    <div className="fixed bottom-0 w-full">
      <nav className="bg-white px-6 py-2 max-w-xl mx-auto shadow-soft">
        <div className="grid grid-cols-5">
          <IconMenu to="/seller" icon="fa-store" text="Home" />
          <IconMenu to="/seller/sales/packaged" icon="fa-cash-register" text="Sales" />
          <IconMenu to="/" icon="fa-plus" text="Add New" />
          <IconMenu to="/seller/products" icon="fa-mug-hot" text="Products" />
          <IconMenu to="/seller/profile" icon="fa-user" text="Profile" />
        </div>
      </nav>
    </div>
  )
}

export default SellerNavbar