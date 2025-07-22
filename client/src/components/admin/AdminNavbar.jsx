import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const AdminNavbar = () => {
  return (
    <div className='flex item-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30'>
      <Link to='/'>
      <div className='flex text-3xl mt-3  '>
        <p className='text-red-700 font-bold'>C</p>
        <h1>ineBuzz</h1>
      </div>  

      </Link>
    </div>
  )
}

export default AdminNavbar
