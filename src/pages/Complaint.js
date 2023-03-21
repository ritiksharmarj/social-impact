import React, { useState } from 'react';
import { supabase } from '../supabase';
import { Circles } from 'react-loader-spinner';

const Complaint = () => {
  const [fileName, setFileName] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({});

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = (e) => {
    setFileName(e.target.files[0].name);

    setData({
      ...data,
      [e.target.name]: e.target.file,
    });

    fileUploadSupabase(e);
  };

  const submit = (e) => {
    console.log(e);
    e.preventDefault();
    if (fileUrl !== '') {
      delete data['upload-file'];
      data['media'] = fileUrl;
      data['user_id'] =
        localStorage.getItem('loggedIn_user_id') != null
          ? localStorage.getItem('loggedIn_user_id')
          : 'ritik_sharma';
      console.log(data);

      supabase
        .from('complaintDetails')
        .insert(data)
        .then((res) => {
          console.log(res);
          window.location.pathname = '';
        });
    }
  };

  const fileUploadSupabase = async (e) => {
    // upload the image file to mediabucket/complaints folder
    setLoading(true);
    supabase.storage
      .from('mediabucket')
      .upload('complaints/' + e.target.files[0].name, e.target.files[0], {
        cacheControl: '3600',
        upsert: true,
      })
      .then((res) => {
        // handle data and error
        if (res && res.data && res.data.path) {
          console.log('Upload successful!');
          setLoading(false);
          setFileUrl(
            supabase.storage.from('mediabucket').getPublicUrl(res.data.path)
              .data.publicUrl
          );
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className='mx-auto max-w-3xl'>
      <div className='px-4 sm:px-6 py-10'>
        <form
          action=''
          onSubmit={submit}
          name='complaint-form'
          id='complaint-form'
          className='flex flex-col gap-5'
        >
          {/* Upload file */}
          <div className='flex items-center justify-center w-full'>
            <label
              htmlFor='upload-file'
              className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 '
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
                <p className='mb-2 text-sm text-gray-500'>
                  <span className='font-semibold'>Click to upload</span> or drag
                  and drop
                </p>
                <p className='text-xs text-gray-500'>
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                onChange={handleUpload}
                name='upload-file'
                id='upload-file'
                type='file'
                className='hidden'
                required
              />
              <p>{fileName}</p>
            </label>
          </div>

          <div className='w-full flex items-center justify-center'>
            <Circles
              height='40'
              width='30'
              color='dodgerblue'
              ariaLabel='circles-loading'
              wrapperStyle={{}}
              wrapperClass=''
              visible={loading}
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor='message'
              className='block mb-2 text font-medium text-gray-900 '
            >
              Description
            </label>
            <textarea
              name='description'
              onChange={updateData}
              id='description'
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none'
              placeholder='Write your thoughts here...'
            ></textarea>
          </div>

          {/* Catgories */}
          <div>
            <label
              htmlFor='category'
              className='block mb-2 font-medium text-gray-900 '
            >
              Select a category
            </label>
            <select
              name='category'
              onChange={updateData}
              id='category'
              className='bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
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
              className='block mb-2 font-medium text-gray-900 '
            >
              Add location
            </label>
            <input
              type='text'
              id='location'
              name='location'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 outline-none'
              placeholder='VT Road, Mansarovar, Rajasthan, India (302020)'
              required
              onChange={updateData}
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
