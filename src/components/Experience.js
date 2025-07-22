import '../styles/Experience.css';

export default function Experience() {
    return (
        <>
            <div className='experience-container'>

                <h2>Experiencia</h2>

                <div className='item-container'>

                
                    <div className="experience-grid">
                        {/* Fila 0 */}
                        <div className="year">Ago 2024 — Ene 2025</div>
                        <div className="dot"></div>
                        <div className="title">Practicante Arquitectura IT/OT</div>

                        {/* Fila 1 */}
                        <div></div> {/* Celda vacía [1][0] */}
                        <div className="line"></div> {/* Línea vertical [1][1] */}
                        <div className="details">
                            <h5>Codelco, Santiago</h5>
                            <ul>
                                <li className='li-element'> Realicé estudios de mercado para la implementación de soluciones tecnológicas en la Corporación para plataformas CMS y gestión de activos tecnológicos (ITSM) con proveedores nacionales e internacionales. </li>
                                <li className='li-element'> Gestioné proveedores para el desarrollo de un estándar en la corporación para normar el uso de inteligencia artificial (IA).</li>
                                <li className='li-element'> Pruebas de concepto para IA de Copilot M365 y lentes de realidad mixta (MR), logrando introducir su uso en el equipo.</li>
                                <li className='li-element'> Configuración e instalación de servidores físicos y virtuales con Vmware.</li>
                                <li className='li-element'> Capacitación TOGAF.</li>
                                <li className='li-element'> Gestión de procesos para licitación de soluciones tecnológicas.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="experience-grid">
                        {/* Fila 0 */}
                        <div className="year">Ene 2022 — Jul 2022</div>
                        <div className="dot"></div>
                        <div className="title">Desarrollador Trainee</div>

                        {/* Fila 1 */}
                        <div></div> {/* Celda vacía [1][0] */}
                        <div className="line"></div> {/* Línea vertical [1][1] */}
                        <div className="details">
                            <h5>Spawn, Curicó</h5>
                            <ul>
                                <li className='li-element'> Participación en el desarrollo de aplicaciones web responsivas utilizando HTML5, CSS3, JavaScript y Angular.</li>
                                <li className='li-element'> Apoyo en la implementación de APIs RESTful para el consumo de datos, trabajando en conjunto al backend para integración.</li>
                                <li className='li-element'> Contribución en testing y QA haciendo uso de Jasmine y Postman.</li>
                                <li className='li-element'> Documentación técnica de componentes y procesos de desarrollo facilitando la escalabilidad del código.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}