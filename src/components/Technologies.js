import  '../styles/Technologies.css';
import { useState, useEffect, useRef } from 'react';

const technologiesTable = [
	[
		'Lenguajes',
		{ name: 'JavaScript', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/JavaScript.svg' },
		{ name: 'TypeScript', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/TypeScript.svg' },
		{ name: 'Python', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Python.svg' },
		{ name: 'Java', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Java.svg' },
		{ name: 'HTML', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/HTML5.svg' },
		{ name: 'CSS', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/CSS3.svg' },
	],
	[
		'Frameworks y Librerías',
		{ name: 'React', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/React.svg' },
		{ name: 'Angular', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Angular.svg' },
		{ name: 'Node.js', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Node.js.svg' },
		{ name: 'Express.js', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Express.svg' },
		{ name: 'Bootstrap', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Bootstrap.svg' },
		{ name: 'Tailwind', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Tailwind.svg' },
	],
	[
		'Bases de Datos',
		{ name: 'PostgreSQL', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/PostgresSQL.svg' },
		{ name: 'MongoDB', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/MongoDB.svg' },
		{ name: 'MySQL', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Mysql.svg' },
		{ name: 'Firebase', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Firebase.svg' },
	],
	[
		'DevOps',
		{ name: 'Docker', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Docker.svg' },
		{ name: 'Google Cloud Platform', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Google Cloud.svg' },
	],
	[
		'Herramientas y Testing',
		{ name: 'Git', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Git.svg' },
		{ name: 'Postman', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Postman.svg' },
		{ name: 'VS Code', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/VSCode.svg' },
		{ name: 'Jasmine', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Jasmine.svg' },
		{ name: 'Karma', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Karma.svg' },
	],
	[
		'Metodologías Ágiles',
		{ name: 'Scrum'},
		{ name: 'Extreme Programming'},
		{ name: 'Kanban' },
	],
	[
		'Otros',
		{ name: 'Google Workspace', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Google.svg' },
		{ name: 'Microsoft 365', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Microsoft.svg' },
		{ name: 'Canva', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Canva.svg'},
		{ name: 'Inglés B1.2' },
	],
];

export default function Technologies() {
	
	return (
        <div className='habilities-container'>
			<h2 className='title-habilities'>Habilidades</h2>
			<div className='description-container'>
				<p>
					A lo largo de mi carrera adquirí experiencia en una variedad de tecnologías y herramientas que me permiten desarrollar aplicaciones web completas. Si bien no soy un experto en todas ellas, tengo un conocimiento sólido y he aplicado estas herramientas en diversas aplicaciones. Las tecnologías que manejo actualmente son:
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