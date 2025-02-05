import React from 'react'
import { SiLeetcode,SiCodingninjas,SiGeeksforgeeks,SiCodechef } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

function Awards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6 text-white text-4xl place-items-center ">
      
      <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25 
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
        <a href="https://leetcode.com/u/Abhishek9311/">
            <SiLeetcode />
        </a>
      </div>
      
      <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
        <a href="https://www.naukri.com/code360/profile/95f1beb8-95d6-47d1-87ae-5201b398aa32">
            <SiCodingninjas />
        </a>
      </div>
      {/* Card 3 */}
      <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
        <a href="https://www.geeksforgeeks.org/user/abhpiniuv5/">
            <SiGeeksforgeeks/>
        </a>
      </div>
      <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400 ">
        <a href="https://www.geeksforgeeks.org/user/abhpiniuv5/">
            <SiCodechef/>
        </a>
      </div>
      <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400 ">
        <a href="https://www.geeksforgeeks.org/user/abhpiniuv5/">
            <FaHackerrank/>
        </a>
      </div>
    </div>

  )
}

export default Awards
