import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <header className='rootLayout'>
            <Link to="/">
            <img src="/logo (1).png" alt="" />
            <span>MY AI</span>
            </Link>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout