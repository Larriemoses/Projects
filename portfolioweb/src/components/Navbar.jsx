import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder' 



function Navbar() {
    return (
        <div className='navbar'>
            <div className='toggleButton'>
                <button> <ReorderIcon /> </button>
            </div>
            <div className='Links'>
                <Link to='/'> Home </Link>
                <Link to='/projects'> Projects </Link>
                <Link to='/experience'> Experience </Link>

            </div>
        </div>
    )
}

export default Navbar;