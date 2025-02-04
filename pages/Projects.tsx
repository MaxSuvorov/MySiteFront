import '../styles/Projects.css';

export default function Projects() {
    const projects = [
        {
            title: 'Calculator_by_me',
            description: 'Да обычный калькулятор',
            link: 'https://github.com/MaxSuvorov/Calculator_by_me',
        },
        {
            title: 'Why-r-u-studying-so-bad',
            description: 'This app shows you why you have a low ranking in your university!',
            link: 'https://github.com/MaxSuvorov/Why-r-u-studying-so-bad',
        },
        {
            title: 'webCarddd',
            description: 'This is my personal card. I hope that now my number of subscribers will increase... maybe :/',
            link: 'https://github.com/MaxSuvorov/webCarddd',
        },
        {
            title: 'App_mile_km',
            description: 'This windowed desktop application for converting miles to kilometers and kilometers to miles',
            link: 'https://github.com/MaxSuvorov/App_mile_km',
        },
        {
            title: 'Recipes_blog',
            description: 'This project aims to create a dynamic recipe publishing website',
            link: 'https://github.com/MaxSuvorov/Recipes_blog',
        },

    ];

    return (
        <section className="projects-section">
            <h2>Проекты</h2>
            <ul className="projects-list">
                {projects.map((project, index) => (
                    <li key={index} className="project-item">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            Перейти в GitHub
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}