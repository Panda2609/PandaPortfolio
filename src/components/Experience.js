import React, { useState } from 'react';
import '../styles/Experience.css';

const experiences = [
    {
        year: 'Jun 2024 — Hoy',
        title: 'Desarrollos proyectos personales',
        subtitle: 'Proyectos propios',
        details: [
            'Desarrollo de prototipos y aplicaciones web fullstack con React, Node.js y bases de datos.',
            'Implementación de sistemas de autenticación, administración de usuarios y gestión de datos.',
            'Diseño e implementación de soluciones end-to-end para problemas del mundo real.'
        ]
    },
    {
        year: 'Ago 2024 — Ene 2025',
        title: 'Practicante Arquitectura IT/OT',
        subtitle: 'Codelco, Santiago',
        details: [
            'Realiza estudios tecnológicos para la implementación de sistema ITSM e IA en la organización.',
            'Gestiona la relación con proveedores clave para el desarrollo de un estándar de IA corporativo.',
            'Elabora pruebas de concepto para IA de Copilot M365 y lentes de realidad mixta (MR).',
            'Se capacita en Arquitectura Empresarial TOGAF V9.2, fortaleciendo la visión estratégica de TI.'
        ]
    },
    {
        year: 'Ene 2022 — Jul 2022',
        title: 'Desarrollador Trainee',
        subtitle: 'Spawn, Curicó',
        details: [
            'Participa en el desarrollo full stack de aplicaciones web responsive con HTML5, CSS3, JavaScript y Angular, mejorando la experiencia de usuario en proyectos internos.',
            'Implementa APIs RESTful integrando 3 sistemas distintos.',
            'Colabora en actividades de QA, apoyando en pruebas funcionales y de integración para validar entregables.',
        ]
    }
];

function ExperienceModal({ experience, onClose }) {
    if (!experience) return null;
    return (
        <div className="experience-modal-overlay" onClick={onClose}>
            <div className="experience-modal-content" onClick={e => e.stopPropagation()}>
                <button className="experience-modal-close" onClick={onClose}>&times;</button>
                <h3>{experience.title}</h3>
                <h5 className='experience-modal-subtitle'>{experience.subtitle}</h5>
                <p>{experience.year}</p>
                <ul className='experience-modal-detail-container'>
                    {experience.details.map((d, i) => <li key={i} className='experience-modal-detail'>{d}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default function Experience() {
    const [active, setActive] = useState(null);
    // Detecta si la pantalla es pequeña
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 900);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='experience-container'>
            <h2>Experiencia</h2>
            <div className='item-container'>
                {isMobile
                    ? experiences.map((exp, idx) => (
                        <div key={idx} className="experience-list-item">
                            <div className="title">{exp.title}</div>
                            <div className="subtitle">{exp.subtitle}</div>
                            <div className="year">{exp.year}</div>
                            <button className="experience-modal-btn" onClick={() => setActive(exp)}>
                                Ver detalles
                            </button>
                        </div>
                    ))
                    : experiences.map((exp, idx) => (
                        <div key={idx} className="experience-grid">
                            <div className="year">{exp.year}</div>
                            <div className="dot"></div>
                            <div className="title">{exp.title}</div>
                            <div className="line"></div>
                            <div className="details">
                                <h5 className='subtitle2'>{exp.subtitle}</h5>
                                <ul className='experience-details'>
                                    {exp.details.map((d, i) => <li key={i} className='li-element'>{d}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ExperienceModal experience={active} onClose={() => setActive(null)} />
        </div>
    );
}
