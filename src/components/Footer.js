import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../index.css';


const Footer = () => {
  return (
    <div className='max-w-[1240px] bg-black mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Garden Of Heathens</h1>
        <p className='py-4'>Join Our Mission</p>
      </div>
    </div>
  );
};

export default Footer;