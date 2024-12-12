import { FaRegNewspaper } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'


import { Link } from "react-router-dom";    
import  Logo from '../assets/logo.png'

function Nav() {
  return (
    
    <nav className=" flex h-20  bg-zinc-100 content-center items-center">
        <div className="block md:flex gap-20 ">
           
            <ul className="flex gap-10 justify-center text-sm">
                <Link to="/"><img src={Logo} alt="#logo" className="pl-5  h-7 mr-44 " /></Link>
                <li className="justify-center items-center justify-items-center">
                    
                    <Link to="/articles" className="block justify-center items-center justify-items-center">
                    <FaRegNewspaper className="text-zinc-400"size={25}/>Articles</Link>
                </li>
                <li className="justify-center items-center justify-items-center">
                 
                    <a href="#" className=" block justify-center items-center justify-items-center">  
                        <FaUsers className="text-zinc-400"size={25}/>
                        People
                    </a>


                </li>
                
            </ul>
        </div>
       
    </nav>

 
  )
}

export default Nav
