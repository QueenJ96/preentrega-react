import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

const Nav = ({ cartCount }) => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/servicios" className="nav-link">Servicios</Link>
        </li>
        <li className="nav-item">
          <Link to="/talleres" className="nav-link">Talleres</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link nav-link-special">Sacar Turno</Link>
        </li>
        
        {/* Sección del Carrito */}
        <li className="nav-item">
          <Link to="/carrito" className="nav-cart">
            <span className="cart-icon">🛒</span> 
            <span className="cart-badge">{cartCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;