import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./rootLayout.css"

const RootLayout = () => {
  return (
    <div className='rootLayout'> 
        <header> 
            <Link to="/" className='logo'>
            <img src="/logo (1).png" alt="" />
            <span>MY AI</span>
            </Link>
            <div className="user">User</div>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout