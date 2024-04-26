import React from 'react';
import logo from '../40.jpg';

function Navbar() {
  return (
    <nav >
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/#">

          <img className="h-8" src={logo} alt="Logo" />
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="/#" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="/#" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Flashcard</a>
          <a href="/#" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          <a href="/#" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
          <button className="bg-blue-800 hover:bg-blue-600 text-white px-8 py-1 rounded-full">Login</button>
        </div>
  
        <div className="md:hidden">
         
        </div>
      </div>
    </div>
  </nav>

  );
}

export default Navbar;
