import React from 'react';
import Tilt from 'react-parallax-tilt';

function Home2() {
  return (
    <>
      <div className="main-container flex flex-col lg:flex-row lg:justify-center lg:items-center p-6 lg:space-x-8">
        
        <div className="intro-container flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 space-y-6">
          <div className="intro text-3xl text-white text-center lg:text-left font-semibold">
            <h1>LET ME <span className='text-purple-400'>INTRODUCE</span> MYSELF</h1>
          </div>
          <div className="about text-lg text-gray-300 text-center lg:text-left">
            <p>
              I fell in love with programming, and I have at least learned something, I think… 🤷‍♂️
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript, and Python. </b>
              </i>
              <br />
              <br />
              My field of interest includes building new &nbsp;
              <i>
                <b className="text-purple-600">Web Technologies and Products</b> and also in areas related to{" "}
                <b className="text-purple-600">Ml & Ai</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products with{" "}
              <i>
                <b className="text-purple-600"> Modern Javascript Libraries and Frameworks</b>.
              </i>
            </p>
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
      </div>
    </>
  );
}

export default Home2;

