import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link
import './Footer.css';
import igIcon from "../../assets/instagram.png";
import fbIcon from "../../assets/facebook.png";

export const Footer = () => {
    return (
      <footer className="footer-main-container">
        <div className="footer-content">
          
          {/* Columna 1: Marca y Redes */}
          <div className="footer-column">
            <h3>Nacer con Estilo</h3>
            <p>Acompañando cada etapa con profesionalismo y calidez.</p>
            <div className="footer-social-icons">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src={igIcon} alt="Instagram" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={fbIcon} alt="Facebook" />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Internos */}
          <div className="footer-column">
            <h3>Enlaces</h3>
            <ul>
              
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/talleres">Talleres</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Datos de Contacto */}
          <div className="footer-column">
            <h3>Contacto</h3>
            <p>📍 Buenos Aires, Argentina</p>
            
            <a href="mailto:contacto@nacerconestilo.com" className="footer-mail">
               ✉️ contacto@nacerconestilo.com
            </a>
          </div>

        </div>
      </footer>
    );
};

export default Footer;
