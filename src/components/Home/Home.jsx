import React from 'react';
import Type from './Type';
import Home2 from './Home2';
// import ParticleBackground from '../ParticleBackground';
import Hello from './Hello';
import { useState,useEffect } from 'react';

function Home() {

  const [isVisible,setvisible]=useState(false);

  useEffect(()=>{
    setvisible(true);
  },[]);
  return (
    <>
      <div className="main-container ">
        <div className="home-container flex flex-col lg:flex-row lg:justify-between lg:items-center p-6 ">
        
          <div className="home-content flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 space-y-6 lg:space-x-12 lg:15 ">
            {/* <ParticleBackground /> */}
            <h1 className=" text-white text-3xl lg:text-4xl font-bold text-center lg:text-left">
              <Hello />
              <p className="animate-wiggle inline-block ml-2 item self-center">👋🏻</p>
            </h1>
            
            <div className="div text-center lg:text-left text-2xl">
              <h1 className='text-white'>
                I am <strong className="font-semibold text-purple-500">Abhishek Kumar</strong>
              </h1>
            </div>
            
            <div className={`text-purple-400 w-full lg:flex lg:items-start text-2xl fade-in ${isVisible ? 'fade-in-active' : ''}`}>
              <Type />
            </div>
          </div>

        
          <div className={`image flex justify-center lg:justify-end w-full lg:w-1/2 mt-6 lg:mt-0 lg:mr-10 fade-in ${isVisible ? 'fade-in-active' : ''} `}>
            <img className="w-98 md:w-80 lg:w-96 rounded-lg shadow-lg" src="/home-main.svg" alt="avatar" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className={`fade-in ${isVisible ? 'fade-in-active' : ''}`}>
        <Home2 />
      </div>
    </>
  );
}

export default Home;
