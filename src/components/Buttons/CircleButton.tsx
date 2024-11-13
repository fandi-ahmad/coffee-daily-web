import React from 'react'

interface CircleButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const CircleButton = (props: CircleButtonProps) => {
  return (
    <button onClick={props.onClick} className={`w-8 h-8 flex justify-center items-center bg-white rounded-full ${props.className}`}>
      {props.children}
    </button>
  )
}

export default CircleButton
