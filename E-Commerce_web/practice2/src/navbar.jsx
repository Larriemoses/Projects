import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/form">Form</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default navbar