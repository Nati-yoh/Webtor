import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const Navbar = () => {
  return (
    <nav className='px-24 py-10 bg-slate-200'>
      <ul className='flex justify-between items-center'>
        <li className='text-2xl'><Link to="/">Webtor</Link></li>
        <ul className="flex justify-center items-center">
          <li className='mx-3'><Link to="/about">About</Link></li>
          <li className='mx-3'><Link to="/notes">Notes</Link></li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
