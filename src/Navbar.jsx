import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full fixed top-0 left-0 bg-white z-30'>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <li className='list-[square] list-inside text-[blue] text-[35px]'>
          <Link to={"/"}><button className='text-2xl md:text-4xl font-bold no-underline text-black'>Prins Usadadiya</button></Link>
        </li>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[40%] justify-between">
          <Link to='/' className='text-black hover:text-blue-600 text-decoration-none'>ABOUT ME</Link>
          <Link to='/resume' className='text-black hover:text-blue-600 text-decoration-none'>RESUME</Link>
          <Link to='/project' className='text-black hover:text-blue-600 text-decoration-none'>PROJECTS</Link>
          <Link to='/contact' className='text-black hover:text-blue-600 text-decoration-none'>CONTACT</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link onClick={() => setIsOpen(false)} to='/' className='text-black hover:text-blue-600'>ABOUT ME</Link>
            <Link onClick={() => setIsOpen(false)} to='/resume' className='text-black hover:text-blue-600'>RESUME</Link>
            <Link onClick={() => setIsOpen(false)} to='/project' className='text-black hover:text-blue-600'>PROJECTS</Link>
            <Link onClick={() => setIsOpen(false)} to='/contact' className='text-black hover:text-blue-600'>CONTACT</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

