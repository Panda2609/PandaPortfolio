import '../styles/Portfolio.css';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

//import images
import proyect1Img from '../images/portfolioImages/proyect1.jpg';
import pymeIMG from '../images/portfolioImages/pyme.png';
import generadorContrasenia from '../images/portfolioImages/generador_contrasenias.png';
import scraperAutos from '../images/portfolioImages/scaper.png';

const projects = [
  {
    image: pymeIMG,
    name: 'Crud Pymes',
    description: 'Sistema de gestión para pequeñas y medianas empresas con operaciones CRUD completas.',
    technologies: ['React', 'CSS', 'JavaScript'],
    demoUrl: 'https://panda2609.github.io/my-pyme/',
    repoUrl: 'https://github.com/Panda2609/my-pyme',
  },
  {
    image: generadorContrasenia,
    name: 'Generador contraseñas',
    description: 'Herramienta para crear contraseñas seguras y personalizables con diferentes criterios.',
    technologies: ['React', 'CSS', 'JavaScript'],
    demoUrl: 'https://panda2609.github.io/password-generator/',
    repoUrl: 'https://github.com/Panda2609/password-generator',
  },
  {
    image: scraperAutos,
    name: 'Scraper de autos',
    description: 'Script de web scraping para extraer información de vehículos desde sitios web.',
    technologies: ['Python', 'Web Scraping'],
    demoUrl: '',
    repoUrl: 'https://github.com/Panda2609/scrapper_python_autos',
  },
  
  
  
  
  // Puedes agregar más proyectos aquí
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
    return (
        <>
        <div className="portfolio-container">
          <h2>Proyectos</h2>
          {/* Elemento 1 */}
          <div className="portfolio-cards">
            {projects.map((project, idx) => (
              <div className="portfolio-card" key={idx}>
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
        </div>
        </>
    );
}