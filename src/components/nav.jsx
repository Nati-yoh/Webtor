import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const Navbar = () => {
  return (
    <nav className='lg:px-24 px-4 py-6 bg-slate-200'>
      <ul className='flex justify-between items-center'>
        <li className='text-2xl'><Link to="/">Webtor</Link></li>
        
          <ul className="flex justify-center flex-row items-center">
            <li className='mx-3 '><Link to="/Links">Links</Link></li>
            <li className='mx-3 hidden lg:inline'><Link to="/about">About</Link></li>
            <li className='mx-3 hidden lg:inline'><Link to="/Contact">Contact</Link></li>

          </ul>
  
      </ul>
    </nav>
  );
};

export default Navbar;
