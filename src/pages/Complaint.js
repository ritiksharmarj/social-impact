import React from 'react';

const Complaint = () => {
  return (
    <div className='mx-auto max-w-3xl'>
      <div className='px-4 sm:px-6 py-10'>
        <form action='' className='flex flex-col gap-5'>
          {/* Upload file */}
          <div className='flex items-center justify-center w-full'>
            <label
              htmlFor='upload-file'
              className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
            >
              <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                <svg
                  aria-hidden='true'
                  className='w-10 h-10 mb-3 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeWidth='1.5'
                    d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                  ></path>
                </svg>
                <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                  <span className='font-semibold'>Click to upload</span> or drag
                  and drop
                </p>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id='upload-file' type='file' className='hidden' required />
            </label>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor='message'
              className='block mb-2 text font-medium text-gray-900 dark:text-white'
            >
              Description
            </label>
            <textarea
              id='description'
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none'
              placeholder='Write your thoughts here...'
            ></textarea>
          </div>

          {/* Catgories */}
          <div>
            <label
              htmlFor='categories'
              className='block mb-2 font-medium text-gray-900 dark:text-white'
            >
              Select a category
            </label>
            <select
              id='categories'
              className='bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              required
            >
              <option defaultValue>Choose a category</option>
              <option value='environment'>Environment</option>
              <option value='crime'>Crime</option>
              <option value='animal-safety'>Animal Safety</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor='complaint-location'
              className='block mb-2 font-medium text-gray-900 dark:text-white'
            >
              Add location
            </label>
            <input
              type='text'
              id='complaint-location'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 outline-none'
              placeholder='VT Road, Mansarovar, Rajasthan, India (302020)'
              required
            />
          </div>

          <button
            type='submit'
            className='text-white bg-blue-500 hover:bg-blue-600 transition rounded-full w-full py-2 px-4 mt-5'
          >
            Post complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default Complaint;
