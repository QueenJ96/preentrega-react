import React from 'react';
import { Link } from 'react-router-dom'; 
import Nav from '../Nav/Nav'; 
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
        <Link to="/" className="logo-container">
            <img src={logo} alt="Logo" />
            <h1>Nacer con Estilo</h1>
        </Link>
        <Nav />
    </header>
  );
};

export default Header;