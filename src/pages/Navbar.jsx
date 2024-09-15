// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-800 shadow-lg p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          {/* Add your image here */}
          <img
            src="/images/Devops-removebg-preview.png" // Replace with your image path
            alt="Logo"
            className="h-10 w-auto" // Adjust the height and width as needed
          />
        </div>
        <div className="block lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`w-full lg:w-auto lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:mt-0 mt-4">
            <li>
              <Link 
                to="/" 
                className="text-white hover:bg-blue-600 px-4 py-2 rounded transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/Linux" 
                className="text-white hover:bg-blue-600 px-4 py-2 rounded transition duration-300 ease-in-out"
              >
                Linux
              </Link>
            </li>
            <li>
              <Link 
                to="/shell_scripting" 
                className="text-white hover:bg-blue-600 px-4 py-2 rounded transition duration-300 ease-in-out"
              >
                Shell Scripting
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='grid-background'></div>
      <div className="p-2 text-center bg-gray-800 mt-4 text-white font-semibold">
        DevOps Essentials
      </div>
    </nav>
  );
};

export default Navbar;
