import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user,loading,error] = useAuthState(auth)
  console.log(user);

  const logout = () => {
    signOut(auth)
    localStorage.removeItem('token')
  }

  const menuITems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/review">Review</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      {
        user && <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      }
      <li>
        {user ? <button className="btn btn-ghost" onClick={logout}>Logout</button> : <Link to="/login">Login</Link>}
      </li>
    </>
  );
  
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
      <label for="dashboard-drawer" class="btn btn-ghost drawer-button lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </Link>
      </div>
      
      <div className="navbar-end">
        <ul className="menu menu-horizontal p-0 hidden lg:flex">
         {menuITems}
        </ul>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
          >
            {menuITems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
