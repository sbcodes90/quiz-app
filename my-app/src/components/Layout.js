import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='bg-teal-500 min-h-[20vh]'>
    <main>
        <Outlet />
    </main>
    </div>
  )
}

export default Layout