import '../styles/AboutMe.css';
import pandaEducation from '../images/portfolioImages/PandaEducation.png';
import pandaGamer from '../images/portfolioImages/PandaGamer.png';
import pandaAboutMe from '../images/portfolioImages/PandaAboutMe.png';
import { useState } from 'react';

const aboutMeBlocks = [
    {
        key: 'about',
        img: pandaAboutMe,
        title: 'Sobre mi',
        text: 'Apasionado por la creación de soluciones tecnológicas que aporten valor real. Me especializo en el desarrollo web con tecnologías basadas en JavaScript, construyendo aplicaciones web completas que combinan usabilidad y escalabilidad. Aprendo rápido, me adapto con facilidad y trabajo con compromiso en equipo.'
    },
    {
        key: 'education',
        img: pandaEducation,
        title: 'Formación',
        text: 'Soy Ingeniero Civil en Computación de la Universidad de Talca, mi Minor en Nuevas tecnologías Computacionales me otorga la capacidad de aprender rápidamente nuevas tecnologías y adaptarme a diferentes entornos de trabajo. Actualmente, me sigo capacitando en tecnologías como React y Nextjs.'
    },
    {
        key: 'hobbies',
        img: pandaGamer,
        title: 'Hobbies',
        text: 'Disfruto mucho de mi tiempo libre jugando videojuegos, programando nuevos proyectos, jugando futbol con amigos y compartiendo buenas conversaciones en linea. Estas actividades me permiten relajarme, aprender y mantenerme conectado con quienes me rodean.'
    }
];

export default function AboutMe() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    // Detectar si es móvil
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 700px)').matches;

    const openModal = (block) => {
        setModalContent(block);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };
    const closeModal = () => {
        setModalOpen(false);
        setModalContent({});
        document.body.style.overflow = '';
    };

    return (
        <>
            <div className="aboutme-container2">
                <h2>Sobre mí</h2>
                <div className="aboutme-container">
                    <div className="aboutme-items">
                        {aboutMeBlocks.map(block => (
                            <div className="aboutme-item chat" key={block.key}>
                                <img src={block.img} alt={block.title} className="aboutme-img" />
                                <div className="aboutme-text">
                                    <div className={block.key === 'education' ? 'chat-question-formation' : 'chat-question'}>{block.title}</div>
                                    {isMobile ? (
                                        <button className="aboutme-modal-btn" onClick={() => openModal(block)}>
                                            Ver más
                                        </button>
                                    ) : (
                                        <div className="chat-answer">
                                            <p>{block.text}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="aboutme-graphic-bamboo">
                        {/* Bamboo stems */}
                        <div className="bamboo-stem stem1">
                            <div className="bamboo-node" style={{marginTop: '32px'}}></div>
                            <div className="bamboo-node" style={{marginTop: '60px'}}></div>
                            <div className="bamboo-node" style={{marginTop: '120px'}}></div>
                        </div>
                        <div className="bamboo-stem stem2">
                            <div className="bamboo-node" style={{marginTop: '28px'}}></div>
                            <div className="bamboo-node" style={{marginTop: '70px'}}></div>
                            <div className="bamboo-node" style={{marginTop: '140px'}}></div>
                        </div>
                        <div className="bamboo-stem stem3">
                            <div className="bamboo-node" style={{marginTop: '24px'}}></div>
                            <div className="bamboo-node" style={{marginTop: '54px'}}></div>
                            <div className="bamboo-node" style={{marginTop: '110px'}}></div>
                        </div>
                        {/* Bamboo leaves */}
                        <div className="bamboo-leaf stem1-leaf1"></div>
                        <div className="bamboo-leaf stem1-leaf2"></div>
                        <div className="bamboo-leaf stem1-leaf3"></div>
                        <div className="bamboo-leaf stem2-leaf1"></div>
                        <div className="bamboo-leaf stem2-leaf2"></div>
                        <div className="bamboo-leaf stem2-leaf3"></div>
                        <div className="bamboo-leaf stem3-leaf1"></div>
                        <div className="bamboo-leaf stem3-leaf2"></div>
                        <div className="bamboo-leaf stem3-leaf3"></div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {modalOpen && (
                <div className="aboutme-modal-overlay" onClick={closeModal}>
                    <div className="aboutme-modal" onClick={e => e.stopPropagation()}>
                        <button className="aboutme-modal-close" onClick={closeModal}>&times;</button>
                        <h3>{modalContent.title}</h3>
                        <img src={modalContent.img} alt={modalContent.title} className="aboutme-modal-img" />
                        <div className="aboutme-modal-text">
                            <p>{modalContent.text}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}