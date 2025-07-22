import  '../styles/Technologies.css';

import angularLogo from '../images/Angular.svg';
import javaLogo from '../images/Java.svg';
import javascriptLogo from '../images/JavaScript.svg';
import gitLogo from '../images/Git.svg';
import typescriptLogo from '../images/TypeScript.svg';
import htmlLogo from '../images/HTML5.svg';
import cssLogo from '../images/CSS3.svg';
import reactLogo from '../images/React.svg';
import nodeLogo from '../images/Node.js.svg';
import googleCloudLogo from '../images/Google Cloud.svg';
import postgreSQLLogo from '../images/PostgresSQL.svg';
import mysqlLogo from '../images/Mysql.svg';
import mongoDBLogo from '../images/MongoDB.svg';
import pythonLogo from '../images/Python.svg';

const technologiesTable = [
	[
		'Frontend',
		{ name: 'React', logo: reactLogo },
		{ name: 'Angular', logo: angularLogo },
		{ name: 'JavaScript', logo: javascriptLogo },
		{ name: 'TypeScript', logo: typescriptLogo },
		{ name: 'HTML', logo: htmlLogo },
		{ name: 'CSS', logo: cssLogo },
	],
	[
		'Backend',
		{ name: 'Node.js', logo: nodeLogo },
		{ name: 'Java', logo: javaLogo },
		{ name: 'Python', logo: pythonLogo },
	],
	[
		'Bases de datos',
		{ name: 'PostgreSQL', logo: postgreSQLLogo },
		{ name: 'MongoDB', logo: mongoDBLogo },
		{ name: 'MySQL', logo: mysqlLogo }, // Assuming MySQL is represented by the same logo as Python

	],
	[
		'Cloud',
		{ name: 'Google Cloud', logo: googleCloudLogo },
	],
	[
		'Otros',
		{ name: 'Git', logo: gitLogo },
		{ name: 'Metodología Scrum' },
		{ name: 'PXP' },
		{ name: 'Canvan' },
	],
];

export default function Technologies() {
	return (
        <div className='habilties-container'>
			<h2>Habilidades</h2>
			<div className='description-container'>
				<p>
					A lo largo de mi carrera, he adquirido experiencia en una variedad de tecnologías
					y herramientas que me permiten desarrollar aplicaciones web completas y eficientes.
					Estas son las tecnologías con las que he trabajado en mis proyectos. 
					Si bien no soy un experto en todas ellas, tengo un conocimiento sólido y 
					he aplicado estas herramientas en diversas aplicaciones.
				</p>
			</div>
			<div className='technologies-table'>
				{technologiesTable.map((row, index) => (
					<div className='table-row' key={index}>
						<div className='table-header'>{row[0]}</div>
						<div className='table-cells'>
							{row.slice(1).map((tech, techIndex) => (
								<div className='table-cell' key={techIndex}>
									{tech && tech.logo ? (
										<img src={tech.logo} alt={`${tech.name} logo`} className='technology-logo' />
									) : (
										<div className='tech-placeholder'>
											{tech && tech.name ? tech.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,3) : '?'}
										</div>
									)}
									<span>{tech.name}</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
        </div>
	);
}