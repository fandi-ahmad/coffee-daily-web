
interface MenuOptionListProps {
  icon: string
  text: string
}

const MenuOptionList = (props: MenuOptionListProps) => {
  return (
    <div className="flex flex-row p-4 cursor-pointer hover:bg-opacity-75 bg-white duration-200">
      <div className="w-8">
        <i className={`fa-solid ${props.icon}`}></i>
      </div>
      <p>{props.text}</p>
    </div>
  )
}

export default MenuOptionList