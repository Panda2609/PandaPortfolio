import { FaGithub } from 'react-icons/fa6';
import '../styles/Navbar.css'; // Importa tus estilos CSS
import { FaLinkedin } from 'react-icons/fa';
import logo from '../images/portfolioImages/logotype.png'; // Importa tu logo

export default function Navbar({ activeSection }) {

  return (
    <nav className="navbar">
      <div className="navbar-content">

        <div className="navbar-left">
          <a href="#home" className="logo-link">
            <span>Pan-dev</span>
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>

        <div className="navbar-center">
          <ul>
            <li><a href="#home" className={activeSection === "home" ? "active" : ""}>Home</a></li>
            <li><a href="#aboutme" className={activeSection === "aboutme" ? "active" : ""}>Sobre mí</a></li>
            <li><a href="#experience" className={activeSection === "experience" ? "active" : ""}>Experiencia</a></li>
            <li><a href="#portfolio" className={activeSection === "portfolio" ? "active" : ""}>Proyectos</a></li>
            <li><a href="#technologies" className={activeSection === "technologies" ? "active" : ""}>Habilidades</a></li>
            <li><a href="#contact" className={`contact-btn${activeSection === "contact" ? " active" : ""}`}>Contactame</a></li>
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
        
      </div>
    </nav>
  );
}
