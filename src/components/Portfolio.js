import React, { useRef, useState } from 'react';
import '../styles/Portfolio.css';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

//import images
import pymeIMG from '../images/portfolioImages/pyme.png';
import generadorContrasenia from '../images/portfolioImages/generador_contrasenias.png';
import scraperAutos from '../images/portfolioImages/scaper.png';
import scraperMonitores from '../images/portfolioImages/monitor_scraping.png';
import pichangaImg from '../images/portfolioImages/pichanga.png';

const projects = [
  {
    image: pichangaImg,
    name: 'Pichanga App',
    description: 'Aplicación end to end para arrendar canchas, gestionar reservas y simular pagos en línea.',
    technologies: ['React', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Google Cloud'],
    demoUrl: 'https://panda2609.github.io/pichanga/',
    repoUrl: 'https://github.com/Panda2609/pichanga',
  status: false,
  },
  {
    image: pymeIMG,
    name: 'Crud Pymes',
    description: 'Sistema de gestión para pequeñas y medianas empresas con operaciones CRUD completas.',
    technologies: ['React', 'CSS', 'JavaScript'],
    demoUrl: 'https://panda2609.github.io/my-pyme/',
    repoUrl: 'https://github.com/Panda2609/my-pyme',
  status: true,

  },
  {
    image: generadorContrasenia,
    name: 'Generador contraseñas',
    description: 'Herramienta para crear contraseñas seguras y personalizables con diferentes criterios.',
    technologies: ['React', 'CSS', 'JavaScript'],
    demoUrl: 'https://panda2609.github.io/password-generator/',
    repoUrl: 'https://github.com/Panda2609/password-generator',
  status: true,
  },
  {
    image: scraperAutos,
    name: 'Scraper autos Mercadolibre',
    description: 'Script de web scraping para extraer información de vehículos desde sitios web.',
    technologies: ['Python'],
    demoUrl: '',
    repoUrl: 'https://github.com/Panda2609/scrapper_python_autos',
  status: true,
  },
  {
    image: scraperMonitores,
    name: 'Scraper monitores solotodo',
    description: 'Script de web scraping en Python que recopila datos de monitores publicados en Solotodo.',
    technologies: ['Python'],
    demoUrl: '',
    repoUrl: 'https://github.com/Panda2609/solotodo-scraping',
  status: true,
  },
];
// Mapeo de nombre a icono
const techIcons = {
  'React': require('../images/React.svg').default,
  'CSS': require('../images/CSS3.svg').default,
  'JavaScript': require('../images/JavaScript.svg').default,
  'TypeScript': require('../images/TypeScript.svg').default,
  'HTML': require('../images/HTML5.svg').default,
  'Angular': require('../images/Angular.svg').default,
  'Node.js': require('../images/Node.js.svg').default,
  'Java': require('../images/Java.svg').default,
  'Python': require('../images/Python.svg').default,
  'PostgreSQL': require('../images/PostgresSQL.svg').default,
  'MongoDB': require('../images/MongoDB.svg').default,
  'Git': require('../images/Git.svg').default,
  'Google Cloud': require('../images/Google Cloud.svg').default,
};

export default function Portfolio() {
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Detecta si es móvil
  const isMobile = window.innerWidth <= 700;

  const scroll = (direction) => {
    if (isMobile) {
      if (direction === 'left') {
        setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
      } else {
        setCurrent((prev) => (prev < projects.length - 1 ? prev + 1 : prev));
      }
    } else {
      const container = scrollRef.current;
      if (!container) return;
      const card = container.querySelector('.portfolio-card');
      const scrollAmount = card ? card.offsetWidth + 32 : 300; // 32px = gap
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="portfolio-container">
      <h2>Proyectos</h2>
      <div className="scroll-container" style={{display:'flex', alignItems:'center', position:'relative'}}>
        <button className="scroll-btn left" onClick={() => scroll('left')} aria-label="Anterior">&#8592;</button>
        {isMobile ? (
          <div className="portfolio-cards" style={{width: '100%'}}>
            <div className="portfolio-card" key={current} style={{position:'relative'}}>
              <span className={`project-badge ${projects[current].status ? 'finished' : 'in-progress'}`}>{projects[current].status ? 'Terminado' : 'En proceso'}</span>
              <div className="portfolio-items-container">
                <img src={projects[current].image} alt={projects[current].name} className="portfolio-image" />
                <h3 className="portfolio-title">{projects[current].name}</h3>
                <p className="portfolio-description">{projects[current].description}</p>
                <div className="portfolio-technologies">
                  {projects[current].technologies.map((tech, i) => {
                    const icon = techIcons[tech] || null;
                    return (
                      <span className="portfolio-tech-icon" key={i}>
                        {icon && <img src={icon} alt={tech} />}
                      </span>
                    );
                  })}
                </div>
                <div className="portfolio-buttons">
                  {projects[current].demoUrl ? (
                    <a href={projects[current].demoUrl} target="_blank" rel="noopener noreferrer" className="portfolio-btn">
                      <FiExternalLink style={{marginRight:'7px', verticalAlign:'middle'}} />Demo
                    </a>
                  ) : (
                    <button className="portfolio-btn portfolio-btn-disabled" disabled>
                      <FiExternalLink style={{marginRight:'7px', verticalAlign:'middle'}} />Demo
                    </button>
                  )}
                  <span className="portfolio-divider"></span>
                  <a href={projects[current].repoUrl} target="_blank" rel="noopener noreferrer" className="portfolio-btn">
                    <FaGithub style={{marginRight:'7px', verticalAlign:'middle'}} />Repositorio
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="portfolio-cards-horizontal" ref={scrollRef}>
            {projects.map((project, idx) => (
              <div className="portfolio-card" key={idx} style={{position:'relative'}}>
                <span className={`project-badge ${project.status ? 'finished' : 'in-progress'}`}>{project.status ? 'Terminado' : 'En proceso'}</span>
                <div className="portfolio-items-container">
                  <img src={project.image} alt={project.name} className="portfolio-image" />
                  <h3 className="portfolio-title">{project.name}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-technologies">
                    {project.technologies.map((tech, i) => {
                      const icon = techIcons[tech] || null;
                      return (
                        <span className="portfolio-tech-icon" key={i}>
                          {icon && <img src={icon} alt={tech} />}
                        </span>
                      );
                    })}
                  </div>
                  <div className="portfolio-buttons">
                    {project.demoUrl ? (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="portfolio-btn">
                        <FiExternalLink style={{marginRight:'7px', verticalAlign:'middle'}} />Demo
                      </a>
                    ) : (
                      <button className="portfolio-btn portfolio-btn-disabled" disabled>
                        <FiExternalLink style={{marginRight:'7px', verticalAlign:'middle'}} />Demo
                      </button>
                    )}
                    <span style={{display:'inline-block', width:'2px', height:'28px', background:'#ccc', margin:'0 10px', borderRadius:'2px', alignSelf:'center'}}></span>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="portfolio-btn">
                      <FaGithub style={{marginRight:'7px', verticalAlign:'middle'}} />Repositorio
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <button className="scroll-btn right" onClick={() => scroll('right')} aria-label="Siguiente">&#8594;</button>
      </div>
    </div>
  );
}
