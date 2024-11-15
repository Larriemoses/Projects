
// eslint-disable-next-line 
import React from 'react';
import '../assets/Styles/components/Header.css'
import logo from '../images/logo.png'; 
import { RiPhoneFill } from 'react-icons/ri'
import { useState } from 'react';

const Header: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
  return (
    <header className='header'>
      <nav>
      <a href="#"><img src={logo} alt="#" /></a>
      <button className="menu_button" onClick={toggleMenu}>☰</button>
        <ul className={`navList ${isOpen ? 'show' : 'hide'}`}>

          <li><a href="#" onClick={toggleMenu}>Find Freelancers</a></li>
          
          <li><a href="#">Find Work</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li className='loginbtn'><a  href="/login"><button className="Login">Login</button></a></li>
          <li className='btn'><button > <RiPhoneFill size={14} /> 800 456 880</button></li>
        </ul>
      </nav>

      
    </header>
  );
};

export default Header;
