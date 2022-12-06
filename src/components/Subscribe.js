import React from 'react';
import Single from '../components/gold.png'
import Double from '../components/silver.png'
import Triple from '../components/bronze.png'

const Subscribe = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Gold</h2>
              <p className='text-center text-4xl font-bold'>10 DERO</p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'></p>
                  <p className='py-2 border-b mx-8'></p>
                  <p className='py-2 border-b mx-8'></p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Join Our Mission</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Silver</h2>
              <p className='text-center text-4xl font-bold'>8 DERO</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'></p>
                  <p className='py-2 border-b mx-8'></p>
                  <p className='py-2 border-b mx-8'></p>
              </div>
              <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Join Our Mission</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Bronze</h2>
              <p className='text-center text-4xl font-bold'>6 DERO</p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'></p>
                  <p className='py-2 border-b mx-8'></p>
                  <p className='py-2 border-b mx-8'></p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Join Our Mission</button>
          </div>
      </div>
    </div>
  );
};

export default Subscribe;