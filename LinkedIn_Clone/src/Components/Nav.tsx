// import React from 'react'
import Articles from "./Articles";

import { Link } from "react-router-dom";    
import  Logo from '../assets/logo.png'

function Nav() {
  return (
    
    <nav className=" flex h-20  bg-zinc-100 content-center items-center">
        <div className="mx-10 flex gap-20">
            <img src={Logo} alt="#logo" className="h-5 mr-44" />
            <ul className="flex gap-10 justify-center">
                <li>
                    <Link to="/" className="">Home</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
                
            </ul>
        </div>
       
    </nav>

 
  )
}

export default Nav
