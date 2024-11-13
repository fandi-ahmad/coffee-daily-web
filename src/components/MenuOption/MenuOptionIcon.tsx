interface MenuOptionIconProps {
  icon: string
  text: string
  value?: number
  onClick?: () => void
}

const MenuOptionIcon = (props: MenuOptionIconProps) => {
  return (
    <button onClick={props.onClick} className="flex flex-col justify-center items-center w-full text-center">
      { props.value ? 
        <div className="w-6 h-6 bg-red-500 text-white rounded-full absolute ms-8 mb-8 text-xs flex justify-center items-center border-2 border-white">
          {props.value}
        </div>
      : null }
      <i className={`fa-solid ${props.icon} text-2xl`}></i>
      <div className="text-xs">{props.text}</div>
    </button>
  )
}

export default MenuOptionIcon