
// eslint-disable-next-line 
import React from 'react';
import '../assets/Styles/components/Header.css'
import logo from '../images/logo.png'; 
import { RiPhoneFill } from 'react-icons/ri'
import { useState } from 'react';





const Header: React.FC = () => {

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault(); // Prevent the default anchor behavior
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  }


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

          <li><a href="#findfreelancers" onClick={(e) => scrollToSection(e, 'findfreelancers')}>Find Freelancers</a></li>
          
          <li><a href="#findworks" onClick={(e) => scrollToSection(e, 'findworks')}>Find Work</a></li>
          <li><a href="#aboutus"onClick={(e) => scrollToSection(e, 'aboutus')}>About Us</a></li>
          <li><a href="#contact"onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
          <li className='loginbtn'><a  href="/login"><button className="Login">Login</button></a></li>
          <li className='btn'><button > <RiPhoneFill size={14} /> 800 456 880</button></li>
        </ul>
      </nav>

      
    </header>
  );
};

export default Header;
