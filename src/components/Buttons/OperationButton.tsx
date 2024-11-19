interface OperationButtonType {
  icon: 'fa-minus' | 'fa-plus'
  disabled?: boolean
  onClick: () => void
}

const OperationButton = (props: OperationButtonType) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className="w-7 h-7 text-sm bg-yellow-500 disabled:bg-yellow-300 hover:bg-yellow-600 duration-200 text-white rounded-full"
    >
      <i className={`fa-solid ${props.icon}`}></i>
    </button>
  )
}

export default OperationButton
