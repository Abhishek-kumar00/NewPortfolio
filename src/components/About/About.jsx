import React,{useState,useEffect} from 'react';
import Tilt from 'react-parallax-tilt';
import TechCard from './TechCard';
import ToolsCard from './ToolsCard';
import Awards from './Awards';

function About() {
  const [isVisible,setvisible]=useState(false);

  useEffect(()=>{
    setvisible(true);
  },[]);

  return (
    <>
      <div className={`main-container flex flex-col lg:flex-row lg:justify-center lg:items-center p-6 lg:space-x-8 fade-in ${isVisible ? 'fade-in-active' : ''}` }>
        
        <div className="intro-container flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 space-y-6">
          <div className="intro text-3xl text-white text-center lg:text-left font-semibold">
            <h1>MY <span className='text-purple-400'>INTRODUCE</span></h1>
          </div>
          <div className="about text-lg text-gray-300 text-center lg:text-left">
            <p>
              I am currently pursuing my B.Tech in Computer Science and Engineering from GGSIPU
              <br />
              <br />
              I am currently in my 3rd year, and I have an eager curiosity 
              and passion for <i><b className='text-purple-400'>learning programming</b></i> and <i><b className='text-purple-400'>Proplem solving skills</b></i>.
              <br />
              <br />
              My field of interest includes building new &nbsp;
              <i>
                <b className="text-purple-400">Web Technologies and Products</b> and also in areas related to{" "}
                <b className="text-purple-400">Machine Learning</b>
              </i>
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
              <br />
              <li>
                <i>
                  <b className="purple">Playing Games</b>
                </i>
              </li>
              <li>
                <i>
                  <b className="purple">Watching SuperHero Movies</b>
                </i>
              </li>
              <li>
                <i>
                  <b className="purple">Reading comics</b>
                </i>
              </li>
            </p>
            <div className="container flex justify-center text-gray-400 text-lg font-semibold">
              <p> "sorry i am just a superhero nerd"</p>
            </div>
          </div>
        </div>

        
        <div className="image flex justify-center lg:justify-end w-full lg:w-1/2 mt-6 lg:mt-0">
          <Tilt>
            <img
              className="w-64 md:w-80 lg:w-80 rounded-lg shadow-lg"
              src="/personimage.svg"
              alt="person"
            />
          </Tilt>
        </div>
        <br />
        <br />

      </div>
      <br />
      <br />
        <h1 className='text-white text-center text-3xl font-bold'>
         professional <span className='text-purple-400'>skillset:</span>
        </h1>
        <br />
        <div className='flex justify-center '>
          <TechCard />
        </div>
        <br />
        <div className="tools">
          <h1 className='text-white text-3xl font-bold'><span className='text-purple-400'> Tools</span> I use </h1>
          <br />
          <ToolsCard />
        </div>
        <br />
        <br />
        <div className="projects">
          <h1 className='text-purple-700 text-3xl font-bold'>Awards</h1>
          <br />
          <div className="proj text-white text-lg">
            <Awards />
          </div>
        </div>
    </>
  );
}

export default About;


