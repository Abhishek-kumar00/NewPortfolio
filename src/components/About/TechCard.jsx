import React from 'react';
import { TbBrandCpp } from "react-icons/tb";
import { FaPython,FaJs,FaReact,FaNode,FaJava,FaGitAlt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql,SiMongodb } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";

function TechCard() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6 text-white text-4xl justify-center">
      
      <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25 
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
        <TbBrandCpp />
      </div>
      
      <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
        <FaJs />
      </div>
      {/* Card 3 */}
      <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
        <FaReact />
      </div>
      {/* Card 4 */}
      <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
        <FaNode />
      </div>
      {/* Card 5 */}
      <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
        <RiNextjsFill />
      </div>
      {/* Card 6 */}
      <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
        <FaPython />
      </div>
      {/* Card 7 */}
      <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
        <SiMysql />
      </div>
      {/* Card 8 */}
      <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
        <SiMongodb />
      </div>
      {/* Card 9 */}
      <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
        <FaJava />
      </div>
      {/* Card 10 */}
      <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
        <FaGitAlt />
      </div>
      {/* Card 11 */}
      <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
        <SiShadcnui />
      </div>
    </div>
  );
}

export default TechCard;
