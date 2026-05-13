import React from 'react';
import { Link } from 'react-router-dom'; 
import Nav from '../Nav/Nav'; 
import './Header.css';
import logo from '../../assets/logo.png';

export const Header = ({ cartCount }) => {
  return (
    <header className="header"> {/* Usá la clase .header que ya tenés en el CSS */}
        <Link to="/" className="logo-container">
            <img src={logo} alt="Logo" />
            <h1>Nacer con Estilo</h1>
        </Link>
        <Nav cartCount={cartCount} />  
    </header>
  );
};


export default Header;