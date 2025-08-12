import { FaGithub } from 'react-icons/fa6';
import '../styles/Navbar.css'; // Importa tus estilos CSS
import { FaLinkedin } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/portfolioImages/logotype.png'; // Importa tu logo
import React, { useState } from 'react';

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Agrega o quita la clase 'menu-open' al body según el estado del menú
  React.useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <a href="#home" className="logo-link" onClick={handleMenuClose}>
            <span>Pan-dev</span>
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>

        {/* Menú normal para desktop */}
        <div className="navbar-center">
          <ul>
            <li><a href="#home" className={activeSection === "home" ? "active" : ""} onClick={handleMenuClose}>Home</a></li>
            <li><a href="#aboutme" className={activeSection === "aboutme" ? "active" : ""} onClick={handleMenuClose}>Sobre mí</a></li>
            <li><a href="#experience" className={activeSection === "experience" ? "active" : ""} onClick={handleMenuClose}>Experiencia</a></li>
            <li><a href="#portfolio" className={activeSection === "portfolio" ? "active" : ""} onClick={handleMenuClose}>Proyectos</a></li>
            <li><a href="#technologies" className={activeSection === "technologies" ? "active" : ""} onClick={handleMenuClose}>Habilidades</a></li>
            <li><a href="#contact" className={`contact-btn${activeSection === "contact" ? " active" : ""}`} onClick={handleMenuClose}>Contactame</a></li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li>
                <a href="https://www.linkedin.com/in/banda-cristian/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='social-logo-navbar' />
                </a>
            </li>
            <li>
                <a href="https://github.com/Panda2609" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='social-logo-navbar' />
                </a>
            </li>
          </ul>
        </div>

        {/* Botón hamburguesa solo en móvil */}
        <button className="navbar-burger" onClick={handleMenuToggle} aria-label="Abrir menú">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <div className={`navbar-mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          <li><a href="#home" className={activeSection === "home" ? "active" : ""} onClick={handleMenuClose}>Home</a></li>
          <li><a href="#aboutme" className={activeSection === "aboutme" ? "active" : ""} onClick={handleMenuClose}>Sobre mí</a></li>
          <li><a href="#experience" className={activeSection === "experience" ? "active" : ""} onClick={handleMenuClose}>Experiencia</a></li>
          <li><a href="#portfolio" className={activeSection === "portfolio" ? "active" : ""} onClick={handleMenuClose}>Proyectos</a></li>
          <li><a href="#technologies" className={activeSection === "technologies" ? "active" : ""} onClick={handleMenuClose}>Habilidades</a></li>
          <li><a href="#contact" className={`contact-btn${activeSection === "contact" ? " active" : ""}`} onClick={handleMenuClose}>Contactame</a></li>
          <li className="navbar-mobile-socials">
            <a href="https://www.linkedin.com/in/banda-cristian/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='social-logo-navbar' />
            </a>
            <a href="https://github.com/Panda2609" target="_blank" rel="noopener noreferrer">
              <FaGithub className='social-logo-navbar' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
