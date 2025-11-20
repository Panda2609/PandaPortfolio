import '../styles/PresentationCard.css';
import { HiDownload } from 'react-icons/hi'; // Heroicons
import { FaRegCommentDots } from 'react-icons/fa'; // Font Awesome


export default function PresentationCard() {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = "https://storage.googleapis.com/bucket-panda-portfolio/cv/ATS_CV_BANDA_CRISTIAN.pdf";
        link.download = 'CV-Banda_Cristian.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="presentation-card">
            <div className="left-content">
                <h3 className='name'>Cristian Banda Guzmán</h3>
                <h2 className='role'>Desarrollador Junior</h2>
                <h5 className='description'>Enfocado en convertir problemas en productos funcionales y escalables.</h5>
                <div className="presentation-buttons-row">
                    <button className='btn' onClick={handleDownloadCV}>
                        <HiDownload style={{marginBottom: '4px'}} />
                        Descargar CV
                    </button>

                    <span className="vertical-divider"></span>
                    
                    <button className='btn' onClick={() => window.location.hash = '#contact'}>
                        <FaRegCommentDots style={{marginRight: '8px'}} />
                        Contactar
                    </button>
                    
                </div>
            </div>
            <div className="right-content">
                <div className="panda-container">
                    <div className="panda-bg-shape"></div>
                        <div className="panda panda-scale">
                            <div className="ear left"></div>
                            <div className="ear right"></div>
                            <div className="head">
                                <div className="eye left">
                                    <div className="pupil"></div>
                                </div>
                                <div className="eye right">
                                    <div className="pupil"></div>
                                </div>
                                <div className="nose"></div>
                                <div className="mouth"></div>
                            </div>
                            <div className="body">
                                <div className="arm left"></div>
                                <div className="arm right"></div>
                                <div className="leg left"></div>
                                <div className="leg right"></div>
                                <div className="bamboo">
                                    <div className="bamboo-stem"></div>
                                    <div className="bamboo-leaf leaf1"></div>
                                    <div className="bamboo-leaf leaf2"></div>
                                    <div className="bamboo-leaf leaf3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}