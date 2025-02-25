import React from 'react'
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaMedium} from "react-icons/fa";
import { FaEnvelope} from "react-icons/fa";


import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>

    <div className="mr-5 hover:text-white"></div>
    
        <nav className='w-full bg-black text-white h-[10vh]  content-center justify-items-center '>
          <ul className='flex flex-row content-center my-5 justify-center text-center items-center text-purple-400 bg-gray-900 max-w-max h-[70%] px-2 rounded-4xl '>
            <li className='flex mr-5  hover:text-white justify-center text-center justify-items-center '><Link className="justify-center" to="/">Larrie Moses</Link></li>
            <li className='mr-5  hover:text-white'><Link to="/education">Education</Link></li>
            <li className='mr-5  hover:text-white'><Link to="/experience">Experience</Link></li>
            <li className='mr-2  hover:text-white content-center justify-items-center '><Link to="/#"><FaFigma size={15}/></Link></li>
            <li className='mr-2  hover:text-white content-center'><Link to="/#"><FaGithub size={15}/></Link></li>
            <li className='mr-2  hover:text-white content-center text-center '><Link to="/#"><FaLinkedin size={15}/></Link></li>
            <li className='mr-2  hover:text-white content-center'><Link to="/#"><FaMedium size={15}/></Link></li>
            <li className='mr-2  hover:text-white content-center '><Link to="/#"><FaEnvelope size={15}/></Link></li>
            

          </ul>
        </nav>
      
    </>
  )
}

export default Nav