
import React from 'react'
import logo from  '../assets/logo.png'
// import logo2 from '../assets/logo-weChat.png'

export default function AuthLayout({children}) {
  return (
    <div>

        <>
        <div className='flex justify-center py-3 shadow-md'>
            <img src={logo} alt="logo" width={180} height={60} />
        </div>
        </>

        {children}
      
    </div>
  )
}
