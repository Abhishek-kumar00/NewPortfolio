import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    let year = new Date().getFullYear();
  
    return (
        <footer className='flex justify-center items-basline w-full py-4 px-6 bg-gray-900 text-white'>
            <div className='flex flex-wrap justify-center items-center gap-6 text-center'>
                <h3>Designed and Developed by Abhishek Kumar</h3>
                <h3>© {year}</h3>
                <div className="flex space-x-4">
                    <a href="https://github.com/Abhishek-kumar00" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <a href="https://www.linkedin.com/me?trk=p_mwlite_profile_view-secondary_nav" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
