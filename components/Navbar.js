import React from 'react';
import logoIcon from 
'../components/favicon.svg';

const Navbar = () => {
  return (
    <nav className="navbar"> 
    <image  alt="Logo" href = '../components/favicon.svg'></image>
        <h1 className="Main Heading">Launch Pad AI</h1>
        <ul>
          <li>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#form">Form</a>
            <a href="#contact">Contact</a>
          </li>
        </ul>
    </nav>
  );
}   
export default Navbar;