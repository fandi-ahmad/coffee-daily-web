import React from 'react';

interface RectangleButtonProps {
  children: React.ReactNode;
  className?: string
  onClick?: () => void
}

const RectangleButton = (props: RectangleButtonProps) => {
  return (
    <button onClick={props.onClick} className="bg-yellow-500 hover:bg-yellow-600 duration-200 text-white rounded-md p-3 w-full capitalize">
      {props.children}
    </button>
  )
}

export default RectangleButton