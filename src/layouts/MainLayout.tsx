import React from 'react';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  navbar?: React.ReactNode
}

const MainLayout = (props: LayoutProps) => {
  return (
    <div className="bg-brown-50 text-dark-brown-200 font-body">
      <div className='bg-brown-100 max-w-xl mx-auto min-h-screen relative pb-14'>
        <Outlet/>
      </div>
      {props.navbar}
    </div>
  )
}

export default MainLayout