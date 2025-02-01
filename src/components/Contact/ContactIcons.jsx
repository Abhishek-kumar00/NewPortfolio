import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub,faInstagram,faXTwitter } from '@fortawesome/free-brands-svg-icons'

function ContactIcons() {
  return (
    <div className='flex items-center mt-8 text-white'>
        <ul className='flex space-x-4 w-full justify-evenly items-center'>
            <li className='github hover:scale-125 lg:w-20 hover:text-blue-400 w-15 '>
                <a className='' href="https://www.linkedin.com/in/abhishek-kumar-808167258/">
                   <FontAwesomeIcon icon={faLinkedin} size="2xl"  />
                </a>
            </li>
            <li className='github hover:scale-125 lg:w-20 w-15'>
                <a className=' hover:scale-125 animate-bounce' href="https://github.com/Abhishek-kumar00">
                    <FontAwesomeIcon icon={faGithub} size="2xl" />

                </a>
            </li>
            <li className='github hover:scale-125 lg:w-20 hover:text-gray-700 w-15'>
                <a className=' hover:scale-125 animate-bounce' href="https://x.com/abhpinran98">
                    <FontAwesomeIcon icon={faXTwitter} size="2xl" />

                </a>
            </li>
            <li className='github hover:scale-125 lg:w-20 hover:text-red-400 w-15'>
                <a className=' hover:scale-125 animate-bounce' href="https://github.com/Abhishek-kumar00">
                    <FontAwesomeIcon icon={faInstagram} size="2xl" />

                </a>
            </li>
        </ul>
      
    </div>
  )
}

export default ContactIcons
