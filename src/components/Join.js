import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white bg-black px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl items-center font-bold py-2'>
            
          </h1>
          <p  >Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 bg-white flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='neon-button rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
      <p>
            We care about the protection of your data. Read our{' '}
            <span className='neon-text'>Privacy Policy.</span>
          </p>
      </div>
  
    </div>
  );
};

export default Newsletter;