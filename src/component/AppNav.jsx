import React from "react";
import {Link, NavLink} from "react-router-dom";
const AppNav = () => {
  return (
    <div className='fixed top-0 z-50 px-20 bg-white navbar drop-shadow-lg bg-base-100'>
      <div className='flex-1'>
        <img className='w-20' src='/images/logo.png' />
      </div>
      <div className='flex-none'>
        <ul className='px-2 menu menu-horizontal'>
          <li>
            <NavLink to='/'>Product</NavLink>
          </li>
        </ul>
        <ul className='px-3 menu menu-horizontal'>
          <li>
            <NavLink to='/cart-list'>View Cart</NavLink>
          </li>
        </ul>

        <div className='px-2 dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src='/images/user.webp' />
            </div>
          </label>
          <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <a onClick={() => {}}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppNav;
