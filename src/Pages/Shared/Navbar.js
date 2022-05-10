import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
   
    <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
  </div>

  <div className="navbar-end">
  <ul className="menu menu-horizontal p-0 hidden lg:flex">
      <li><Link className='hover:bg-gray-900 hover:text-white rounded-lg duration-300' to='/'>Home</Link></li>
      <li><Link className='hover:bg-gray-900 hover:text-white rounded-lg duration-300' to='/'>About</Link></li>
      <li><Link className='hover:bg-gray-900 hover:text-white rounded-lg duration-300' to='/'>Appointment</Link></li>
      <li><Link className='hover:bg-gray-900 hover:text-white rounded-lg duration-300' to='/'>Reviews</Link></li>
      <li><Link className='hover:bg-gray-900 hover:text-white rounded-lg duration-300' to='/'>Contact Us</Link></li>
      <li><Link className='hover:bg-gray-900 hover:text-white rounded-lg duration-300' to='/'>Login</Link></li>
    </ul>
  <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/'>About</Link></li>
      <li><Link to='/'>Appointment</Link></li>
      <li><Link to='/'>Reviews</Link></li>
      <li><Link to='/'>Contact Us</Link></li>
      <li><Link to='/'>Login</Link></li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default Navbar;