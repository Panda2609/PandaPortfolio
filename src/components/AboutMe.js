import '../styles/AboutMe.css';
import pandaEducation from '../images/portfolioImages/PandaEducation.png';
import pandaGamer from '../images/portfolioImages/PandaGamer.png';
import pandaAboutMe from '../images/portfolioImages/PandaAboutMe.png';

export default function AboutMe() {
    return (
        <>  
            <div className="aboutme-container2">

                <h2>Sobre mí</h2>
                <div className="aboutme-container">
                    <div className="aboutme-items">
                        {/* Quién eres */}
                        <div className="aboutme-item chat">
                            <img src={pandaAboutMe} alt="Foto personal" className="aboutme-img" />
                            <div className="aboutme-text">
                                <div className="chat-question">Sobre mi</div>
                                <div className="chat-answer">
                                    <p>
                                        Apasionado por la creación de soluciones tecnológicas que aporten valor real.  
                                        Me especializo en el desarrollo web con tecnologías basadas en JavaScript, construyendo aplicaciones
                                        web completas que combinan usabilidad y escalabilidad. Aprendo rápido, me adapto con facilidad y trabajo con compromiso en equipo.
                                    </p>
                            </div>
                            </div>
                        </div>
                        {/* Qué estudiaste */}
                        <div className="aboutme-item chat">
                            <div className="aboutme-text">
                                <div className="chat-question-formation">Formación</div>
                                <div className="chat-answer">
                                    <p>
                                        Soy Ingeniero Civil en Computación de la Universidad de Talca, mi Minor en Nuevas tecnologías Computacionales
                                        me otorga la capacidad de aprender rápidamente nuevas tecnologías y adaptarme a diferentes entornos de trabajo. Actualmente,
                                        me sigo capacitando en tecnologías como React y Nextjs.
                                    </p>
                                    
                                </div>
                            </div>
                            <img src={pandaEducation} alt="Formación" className="aboutme-img" />
                        </div>
                        {/* Qué te gusta hacer */}
                        <div className="aboutme-item chat">
                            <img src={pandaGamer} alt="Hobbies" className="aboutme-img" />
                            <div className="aboutme-text">
                                <div className="chat-question">Hobbies</div>
                                <div className="chat-answer">
                                    <p>
                                        Disfruto mucho de mi tiempo libre jugando videojuegos, 
                                        programando nuevos proyectos, jugando futbol con amigos 
                                        y compartiendo buenas conversaciones en linea. Estas actividades
                                        me permiten relajarme, aprender y mantenerme conectado con quienes 
                                        me rodean.
                                    </p>
                                </div>
                            </div>
                        </div>
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
            
        </>
    );
}