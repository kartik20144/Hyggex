import React from 'react'
import logo from "../41.jpg"
import icon from "../5.jpg"

const Footer = () => {
  return (
    <nav className='py-5'>
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
        <a href="/#">
            
          <img  className="h-20" src={logo} alt="Logo" />
            </a>
        </div>
        {/* Navigation Links and Login Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/#" className="flex items-center">
            
        <img className='h-8' src={icon} alt="" />
          <button className=" px-1 py-1 ">Create FlashCard</button>
          </a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Footer