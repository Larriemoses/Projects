import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Navbar() {
  return (
   <div className='navwhole'> 
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
                
            </ul>
        
        </nav>
        <hr/>
        </div>
  )
}

export default Navbar