import React, { useState } from 'react';
import '../styles/Experience.css';

const experiences = [
    {
        year: 'Ago 2024 — Ene 2025',
        title: 'Practicante Arquitectura IT/OT',
        subtitle: 'Codelco, Santiago',
        details: [
            'Realicé estudios de mercado para plataformas gestión de activos tecnológicos (ITSM) con proveedores nacionales e internacionales.',
            'Gestioné proveedores para el desarrollo de un estándar en la corporación para normar el uso de inteligencia artificial (IA).',
            'Pruebas de concepto para IA de Copilot M365 y lentes de realidad mixta (MR), logrando introducir su uso en el equipo.',
            'Configuración e instalación de servidores físicos y virtuales con Vmware.',
            'Capacitación TOGAF V 9.2.',
        ]
    },
    {
        year: 'Ene 2022 — Jul 2022',
        title: 'Desarrollador Trainee',
        subtitle: 'Spawn, Curicó',
        details: [
            'Participación en el desarrollo de aplicaciones web responsivas utilizando HTML5, CSS3, JavaScript y Angular.',
            'Apoyo en la implementación de APIs RESTful para el consumo de datos, trabajando en conjunto al backend para integración.',
            'Contribución en testing y QA haciendo uso de Jasmine y Postman.',
            'Documentación técnica de componentes y procesos de desarrollo facilitando la escalabilidad del código.'
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
                            <div className="year">{exp.year}</div>
                            <div className="title">{exp.title}</div>
                            <div className="subtitle">{exp.subtitle}</div>
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
