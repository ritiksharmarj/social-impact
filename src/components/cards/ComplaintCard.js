import React from 'react';
import { Link } from 'react-router-dom';

const ComplaintCard = ({ singleData }) => {
  return (
    <div className='w-full border border-gray-200 rounded-xl p-4'>
      <div className='flex items-center gap-4'>
        <img
          className='w-12 h-12 rounded-full border-2 border-gray-200'
          src={`https://robohash.org/${singleData.user_id}`}
          alt=''
          loading='lazy'
        />
        <div className='w-full flex items-center justify-between'>
          <div>
            <h3 className='font-semibold'>{singleData.user_id}</h3>
            <p className='text-slate-400 text-sm'>Human</p>
          </div>
          <Link to='/'>
            <div className='text-sm border hover:border-blue-500 hover:bg-blue-50 active:text-white active:bg-blue-500 py-1 px-4 rounded-full transition'>
              Follow
            </div>
          </Link>
        </div>
      </div>

      <div className='w-full mt-5'>
        <p className='sm:text-base text-sm'>{singleData.description}</p>
        <img
          className='w-full sm:h-80 h-60 object-cover rounded-xl mt-3'
          src={singleData.media}
          alt=''
        />
      </div>

      <div className='flex items-center justify-between mt-3'>
        <div className='flex items-center gap-12'>
          <Link className='flex items-center gap-1' to='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='sm:w-6 sm:h-6 w-5 h-5'
            >
              <path d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
            </svg>
            <p className='sm:text-base text-sm'>88</p>
          </Link>

          <Link className='flex items-center gap-1' to='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='sm:w-6 sm:h-6 w-5 h-5'
            >
              <path d='M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z' />
            </svg>
            <p className='sm:text-base text-sm'>12</p>
          </Link>

          <Link className='flex items-center gap-1' to='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='sm:w-6 sm:h-6 w-5 h-5'
            >
              <path d='M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z' />
            </svg>
            <p className='sm:text-base text-sm'>154</p>
          </Link>
        </div>

        <Link className='flex items-center gap-1' to='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='sm:w-6 sm:h-6 w-5 h-5'
          >
            <path d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z' />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ComplaintCard;
