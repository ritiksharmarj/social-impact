import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/real-impact.svg';

const Header = () => (
  <header className='sticky top-0 z-30 bg-white bg-opacity-50 backdrop-blur backdrop-filter'>
    <div className='mx-auto max-w-3xl sm:px-6'>
      <div className='flex items-center justify-between px-4 sm:px-0 py-4 border-b border-gray-200'>
        {/* User */}
        <Link to='/'>
          <img
            className='w-10 h-10 rounded-full fill-blue-500 text-blue-500'
            src={Logo}
            alt='logo'
          />
        </Link>

        {/* Create complaint */}
        <Link to='/complaint'>
          <div className='flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white transition py-2 px-4 rounded-full sm:w-60 w-44'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path d='M12 4.5v15m7.5-7.5h-15' />
            </svg>
            Create a post
          </div>
        </Link>

        {/* Check Complaint Status */}
        <Link to='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0' />
          </svg>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
