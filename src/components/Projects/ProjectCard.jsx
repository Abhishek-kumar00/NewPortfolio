import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200); // Delay to trigger fade-in
  }, []);

  return (
    <div className={`p-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="border-2 border-purple-300 rounded-lg shadow-lg hover:border-purple-700 hover:scale-105 hover:shadow-purple-400 transition-transform duration-300 ease-in-out">
          <img className="w-full h-48 object-cover rounded-t-lg" src="/MemoryCard.png" alt="Memory Card Game" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2 text-purple-500">Memory Card</h3>
            <p className="text-gray-100 text-sm">
              This is a memory game that was an assignment from the Odin Project. You need to get unique cards to score.
            </p>
            <div className="mt-3">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">#React</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">#Tailwind</span>
            </div>
            <div className="liveLinks flex justify-center items-center gap-5 mt-3">
              <a className='text-white' href="https://github.com/Abhishek-kumar00/memoryCardGame.git" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a className='text-white' href="https://memory-card-game-eight-beta.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>

        {/* Placeholder Cards */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="border-2 border-purple-300 rounded-lg shadow-lg hover:border-purple-700 hover:scale-105 hover:shadow-purple-400 transition-transform duration-300 ease-in-out">
            <img className="w-full h-48 object-cover rounded-t-lg" src="/istockphoto-592031250-612x612.jpg" alt="Placeholder Project" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2 text-purple-500">Coming Soon</h3>
              <p className="text-gray-100 text-sm">I will soon add these projects also...😅</p>
              <div className="mt-3">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">#Next.js</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">#UI/UX</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
