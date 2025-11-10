import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // get current route

  // Helper function to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <div className='w-full fixed top-0 left-0 bg-white z-30 shadow-sm'>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <li className='list-[square] list-inside text-[blue] text-[35px]'>
          <Link to={"/"}>
            <button className='text-2xl md:text-4xl font-bold no-underline text-black'>
              Prins Usadadiya
            </button>
          </Link>
        </li>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[40%] justify-between">
          <Link
            to='/'
            className={`${isActive('/') ? 'text-blue-600' : 'text-black'} hover:text-blue-600 text-decoration-none`}
          >
            ABOUT ME
          </Link>
          <Link
            to='/resume'
            className={`${isActive('/resume') ? 'text-blue-600' : 'text-black'} hover:text-blue-600 text-decoration-none`}
          >
            RESUME
          </Link>
          <Link
            to='/project'
            className={`${isActive('/project') ? 'text-blue-600' : 'text-black'} hover:text-blue-600 text-decoration-none`}
          >
            PROJECTS
          </Link>
          <Link
            to='/contact'
            className={`${isActive('/contact') ? 'text-blue-600' : 'text-black'} hover:text-blue-600 text-decoration-none`}
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile Hamburger / Close Button */}
        <button
          className="md:hidden text-3xl text-black focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            // Close (X)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Custom Blue 3-Line Hamburger
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-8 w-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <line x1="6" y1="7" x2="14" y2="7" strokeLinecap="round" />
              <line x1="10" y1="12" x2="18" y2="12" strokeLinecap="round" />
              <line x1="6" y1="17" x2="14" y2="17" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Full-screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#f4ece6] z-40 flex flex-col justify-center items-center space-y-8 transition-all duration-300">
          <Link
            onClick={() => setIsOpen(false)}
            to='/'
            className={`${isActive('/') ? 'text-blue-600' : 'text-black'} text-2xl font-semibold hover:text-blue-600 text-decoration-none`}
          >
            ABOUT ME
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to='/resume'
            className={`${isActive('/resume') ? 'text-blue-600' : 'text-black'} text-2xl font-semibold hover:text-blue-600 text-decoration-none`}
          >
            RESUME
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to='/project'
            className={`${isActive('/project') ? 'text-blue-600' : 'text-black'} text-2xl font-semibold hover:text-blue-600 text-decoration-none`}
          >
            PROJECTS
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to='/contact'
            className={`${isActive('/contact') ? 'text-blue-600' : 'text-black'} text-2xl font-semibold hover:text-blue-600 text-decoration-none`}
          >
            CONTACT
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
