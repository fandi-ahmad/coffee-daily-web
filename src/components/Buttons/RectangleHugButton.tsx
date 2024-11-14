import React from 'react'

interface RectangleHugButtonProps {
  children: React.ReactNode;
  className?: string
  onClick?: () => void
}

const RectangleHugButton = (props: RectangleHugButtonProps) => {
  return (
    <button onClick={props.onClick} className={`${props.className} bg-dark-brown-200 hover:bg-dark-brown-100 duration-200 text-white rounded-md p-3 flex flex-row items-center capitalize`}>
      {props.children}
    </button>
  )
}

export default RectangleHugButton
