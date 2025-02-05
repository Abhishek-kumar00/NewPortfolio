import React from 'react'
import ProjectCard from './ProjectCard.jsx'

function Projects() {
  return (
    <>
      <div className="div ">
        <h1 className='text-3xl font-bold text-white'>
          My Recent <span className='text-purple-500'>Works</span>
        </h1>
        <div className="text-white">
          <p>
            Here are a few projects I've worked on recently. 
            <br />
            <span className='text-gray-400'> most of the projects are not complete ... sorry 😅</span>
          </p>
        </div>
        <br />
        <ProjectCard/>
        
        

      </div>
      
    </>
  )
}

export default Projects
