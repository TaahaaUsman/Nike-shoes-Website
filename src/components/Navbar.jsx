import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navigation">
      <a href="#"><img src="/Images/brand_logo.png" alt="Brand-Logo" /></a>
      <div className="components">
        <NavLink to='/' activeClassName="text-red-700">Home</NavLink>
        <NavLink to='/price' activeClassName="text-red-700" className="text-gray-700">Prices</NavLink>
        <NavLink to='/products' activeClassName="text-red-700" className="text-gray-700">Products</NavLink>
        <NavLink to='/cart' activeClassName="text-red-700" className="text-gray-700">Your Cart</NavLink>
      </div>
      <button className='nav-button'>Log In</button>
    </div>
  )
}

export default Navbar
