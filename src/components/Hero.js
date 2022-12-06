import React from 'react';
import Typed from 'react-typed';
import to from 'await-to-js';
import DeroBridgeApi from 'dero-rpc-bridge-api';


const Hero = () => {

  const deroBridgeApiRef = React.useRef()
  const [bridgeInitText, setBridgeInitText] = React.useState('')


  React.useEffect(() => {
    const load = async () => {
      deroBridgeApiRef.current = new DeroBridgeApi()
      const deroBridgeApi = deroBridgeApiRef.current
      const [err] = await to(deroBridgeApi.init())
      if (err) {
        setBridgeInitText('failed to connect to extension')
      } else {
        setBridgeInitText('connected to extension')
      }
    }

    window.addEventListener('load', load)
    return () => window.removeEventListener('load', load)
  }, [])
// this function will allow you too update the random number 
  const UpdateRando = React.useCallback(async()=>{
    const deroBridgeApi = deroBridgeApiRef.current
    const [err, res] = await to(deroBridgeApi.wallet('start-transfer', {
      scid: "ac9228ffa0dcabd3c357bb02202be36b628014b12c69c44884be14bfe64124c6",
      ringsize:2,
      sc_rpc:[
        {
          name: "entrypoint",
          datatype: "S",
          value: "SetRandomInterger"
        }
      ]
    }))

  })
  const getRando = React.useCallback(async()=>{
    const deroBridgeApi = deroBridgeApiRef.current
    const [err, res] = await to(deroBridgeApi.daemon('get-sc', {
      scid: "ac9228ffa0dcabd3c357bb02202be36b628014b12c69c44884be14bfe64124c6",
      variables: true,
    }))
    console.log(res)
  })

  return (
    <div className='text-white'>
        
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          Garden Of Heathens
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Sowing Seeds
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Spinning The Webs Of Nature
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl flex font-bold md:pl-4 pl-2'
            strings={['Join', 'Our', 'Mission']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p>
          {bridgeInitText}
        </p>
        <button onClick={getRando} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>GetRando</button>
        <button onClick={UpdateRando} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Update</button>
      </div>
    </div>
  );
};

export default Hero;