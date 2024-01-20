import React from 'react'
import Logo from '../MovieLogo.png'
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <div className='flex border-black space-x-8 item-center pl-3 py-4 bg-gray-800'>
      <img src = { Logo } className='w-[75px]'/>

      {/* Movies */}
      <Link to="/" className='text-blue-400 mt-4'>Movies</Link>

      {/* WatchList */}
      <Link to="/watchlist" className='text-blue-400 mt-4'>WatchList</Link>
    </div>
  )
}

export default NavBar
