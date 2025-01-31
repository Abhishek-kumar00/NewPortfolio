import React from 'react';
import { TbBrandVscode } from "react-icons/tb";
import { AiOutlineOpenAI } from "react-icons/ai";
import { SiExcalidraw,SiCanva } from "react-icons/si";
import { RiVercelFill } from "react-icons/ri";

function ToolsCard() {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-white text-4xl max-w-screen-lg justify-center">
        {/* Card 1 */}
        <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
          <TbBrandVscode />
        </div>
        {/* Card 2 */}
        <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
          <AiOutlineOpenAI />
        </div>
        {/* Card 3 */}
        <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
          <SiExcalidraw />
        </div>
        {/* Card 4 */}
        <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
          <RiVercelFill />
        </div>

        <div className="border-2 border-purple-300 rounded-lg p-4 m-4 flex justify-center items-center w-25 h-25
      hover:border-purple-700 hover:scale-125 active:scale-110 transition-transform duration-300 ease-in-out shadow-lg shadow-purple-400">
          <SiCanva />
        </div>
      </div>
    </div>
  );
}

export default ToolsCard;
