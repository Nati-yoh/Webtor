import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'


const Links = () => {
    return (
    <div className=' pt-24 pb-96 bg-slate-900 text-white '>
      <ul className='flex flex-col justify-center items-center'>
        <ul className="flex flex-col justify-center items-center">
          <li className='mx-3 mb-5 text-5xl'><Link to="/about">About</Link></li>
          <li className='mx-3 text-5xl mt-5'><Link to="/Contact">Contact</Link></li>
        </ul>
      </ul>

    </div>
    )
}
export default Links