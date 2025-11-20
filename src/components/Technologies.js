import  '../styles/Technologies.css';

const technologiesTable = [
	[
		'Frontend',
		{ name: 'React', logo: 'https://storage.googleapis.com/bucket-panda-portfolio/resources/technologies-svg/React.svg' },
		{ name: 'Angular', logo: 'https://storage.googleapis.com/bucket-panda-portfolio/resources/technologies-svg/Angular.svg' },
		{ name: 'JavaScript', logo: 'https://storage.googleapis.com/bucket-panda-portfolio/resources/technologies-svg/JavaScript.svg' },
		{ name: 'TypeScript', logo: 'https://storage.googleapis.com/bucket-panda-portfolio/resources/technologies-svg/TypeScript.svg' },
		{ name: 'HTML', logo: 'https://storage.googleapis.com/bucket-panda-portfolio/resources/technologies-svg/HTML5.svg' },
		{ name: 'CSS', logo: 'https://storage.googleapis.com/bucket-panda-portfolio/resources/technologies-svg/CSS3.svg' },
	],
	[
		'Backend',
		{ name: 'Node.js', logo: 'https://storage.googleapis.com/bucket-panda-portfolio/resources/technologies-svg/Node.js.svg' },
		{ name: 'Java', logo: 'https://storage.googleapis.com/bucket-panda-portfolio/resources/technologies-svg/Java.svg' },
		{ name: 'Python', logo: 'https://storage.googleapis.com/bucket-panda-portfolio/resources/technologies-svg/Python.svg' },
	],
	[
		'Data Base',
		{ name: 'PostgreSQL', logo: 'https://storage.googleapis.com/bucket-panda-portfolio/resources/technologies-svg/PostgresSQL.svg' },
		{ name: 'MongoDB', logo: 'https://storage.googleapis.com/bucket-panda-portfolio/resources/technologies-svg/MongoDB.svg' },
		{ name: 'MySQL', logo: 'https://storage.googleapis.com/bucket-panda-portfolio/resources/technologies-svg/Mysql.svg' },

	],
	[
		'Cloud',
		{ name: 'Google Cloud', logo: 'https://storage.googleapis.com/bucket-panda-portfolio/resources/technologies-svg/Google Cloud.svg' },
	],
	[
		'Otros',
		{ name: 'Git', logo: 'https://storage.googleapis.com/bucket-panda-portfolio/resources/technologies-svg/Git.svg' },
		{ name: 'Metodología Scrum' },
		{ name: 'PXP' },
		{ name: 'Canvan' },
	],
];

export default function Technologies() {
	
	return (
        <div className='habilities-container'>
			<h2 className='title-habilities'>Habilidades</h2>
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