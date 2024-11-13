import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string
}

const ScreenLayout = (props: LayoutProps) => {
  return (
    <div className={`px-6 ${props.className}`}>
      {props.children}
    </div>
  )
}

export default ScreenLayout