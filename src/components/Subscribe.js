import React from 'react';
import './subscribe.css';
import Single from '../components/gold.png'
import Double from '../components/silver.png'
import Triple from '../components/bronze.png'

const Subscribe = () => {
  return (
    <div className='container'>
    <div className='box'>
        <span></span>
        <div className='content'>
            <h2 className='bg-transparent text-white' >Card One</h2>
            <p className='bg-transparent text-white' >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.</p>
                <button className='neon-button w-[100px] rounded-md font-medium my-6 mx-auto py-3' >Subscribe</button>
        </div> 
    </div>
    <div className='box'>
        <span></span>
        <div className='content'>
            <h2 className='bg-transparent text-white' >Card One</h2>
            <p className='bg-transparent text-white' >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.</p>
                <button className='neon-button w-[100px] rounded-md font-medium my-6 mx-auto py-3' >Subscribe</button>
        </div> 
    </div>   <div className='box'>
        <span></span>
        <div className='content'>
            <h2 className='bg-transparent text-white' >Card One</h2>
            <p className='bg-transparent text-white' >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.</p>
                <button className='neon-button w-[100px] rounded-md font-medium my-6 mx-auto py-3' >Subscribe</button>
        </div> 
    </div>
</div>
  );
};

export default Subscribe;