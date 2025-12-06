import '../styles/TechnologiesAccordion.css';
import { useState } from 'react';

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
		{ name: 'GCP', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Google Cloud.svg' },
	],
	[
		'Herramientas y Testing',
		{ name: 'Git', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Git.svg' },
		{ name: 'Postman', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Postman.svg' },
		{ name: 'VSCode', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/VSCode.svg' },
		{ name: 'Jasmine', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Jasmine.svg' },
		{ name: 'Karma', logo: 'https://storage.googleapis.com/bucket-portfolio-web/resources/technologies-svg/Karma.svg' },
	],
	[
		'Metodologías Ágiles',
		{ name: 'Scrum'},
		{ name: 'Kanban' },
		{ name: 'XP'},
	],
];

export default function TechnologiesAccordion() {
	const [openAccordion, setOpenAccordion] = useState(0);

	const toggleAccordion = (index) => {
		setOpenAccordion(openAccordion === index ? -1 : index);
	};

	return (
		<div className='accordion-container'>
			<h2 className='accordion-title'>Habilidades</h2>
			<div className='description-container-accordion'>
				<p>
					A lo largo de mi carrera adquirí experiencia en una variedad de tecnologías y herramientas que me permiten desarrollar aplicaciones web completas. Si bien no soy un experto en todas ellas, tengo un conocimiento sólido y he aplicado estas herramientas en diversas aplicaciones. Las tecnologías que manejo actualmente son:
				</p>
			</div>
			<div className='accordion-wrapper'>
				{technologiesTable.map((row, index) => (
					<div className='accordion-item' key={index}>
						<button
							className={`accordion-header ${openAccordion === index ? 'active' : ''}`}
							onClick={() => toggleAccordion(index)}
							aria-expanded={openAccordion === index}
						>
							<span className='accordion-title-text'>{row[0]}</span>
							<span className='accordion-icon'>
								{openAccordion === index ? '−' : '+'}
							</span>
						</button>
						<div
							className={`accordion-content ${openAccordion === index ? 'open' : ''}`}
						>
							<div className='accordion-content-inner'>
								{row.slice(1).map((tech, techIndex) => (
									<div className='accordion-tech-item' key={techIndex} title={tech.name}>
										{tech && tech.logo ? (
											<img src={tech.logo} alt={`${tech.name} logo`} className='accordion-tech-logo' />
										) : (
											<div className='accordion-tech-placeholder'>
												{tech && tech.name ? tech.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 3) : '?'}
											</div>
										)}
										<span className='accordion-tech-name'>{tech.name}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
