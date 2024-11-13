import React from 'react';

interface RoundedButtonProps {
  children: React.ReactNode;
  className?: string
  onClick?: () => void
  isActive?: boolean
  value?: number
}

const RoundedButton = (props: RoundedButtonProps) => {
  return (
    <div>
      { props.value ? 
        <div className='flex justify-end -mb-3 z-20 relative'>
          <div className='w-6 h-6 bg-red-500 text-white rounded-full text-xs flex justify-center items-center border-2 border-brown-100'>
            {props.value}
          </div>
        </div>
      : <div className='mb-3'></div> }

      <button onClick={props.onClick} className={`${props.isActive ? 'bg-brown-300 text-white' : 'bg-white'} z-10 rounded-full px-4 py-2 text-sm capitalize shadow-soft ${props.className}`}>
        {props.children}
      </button>
    </div>
  )
}

export default RoundedButton