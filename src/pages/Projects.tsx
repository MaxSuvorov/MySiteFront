import '../styles/Projects.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { Project } from '../Types/Project';
import { addProject } from '../store/projectSlice'; 

export const Projects = () => {
    const [selectedTech] = useState<string>('All');
    const [newProject, setNewProject] = useState<Project>({
        id: 0,
        name: '',
        description: '',
        link: '',
        technologies: []
    });

    const dispatch = useDispatch();
    const projects = useSelector((state: RootState) => state.projects.items || []);

    const filteredProjects = projects.filter((project: Project) =>
        selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
    );


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewProject((prev) => ({ ...prev, [name]: value }));
    };

    const handleTechArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNewProject((prev) => ({
            ...prev,
            technologies: prev.technologies.includes(value)
                ? prev.technologies.filter(tech => tech !== value)
                : [...prev.technologies, value]
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const projectToAdd = { ...newProject, id: Date.now() }; 
        dispatch(addProject(projectToAdd)); 
        setNewProject({
            id: 0,
            name: '',
            description: '',
            link: '',
            technologies: []
        }); 
    };

    return (
        <section className="projects-section">
            <div className="form-container">
                <h2>Добавить новый проект</h2>
                <form onSubmit={handleSubmit} className="project-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Название проекта"
                        value={newProject.name}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Описание проекта"
                        value={newProject.description}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="url"
                        name="link"
                        placeholder="Ссылка на проект"
                        value={newProject.link}
                        onChange={handleInputChange}
                        required
                    />
                    <div>
                        <div className="tech-checkbox">
                            <input
                                type="checkbox"
                                id="tech-cpp"
                                value="C++"
                                checked={newProject.technologies.includes('C++')}
                                onChange={handleTechArrayChange}
                            />
                            <label htmlFor="tech-cpp" className="tech-label">C++</label>
                        </div>
                        <div className="tech-checkbox">
                            <input
                                type="checkbox"
                                id="tech-js"
                                value="JavaScript"
                                checked={newProject.technologies.includes('JavaScript')}
                                onChange={handleTechArrayChange}
                            />
                            <label htmlFor="tech-js" className="tech-label">JavaScript</label>
                        </div>
                        <div className="tech-checkbox">
                            <input
                                type="checkbox"
                                id="tech-html"
                                value="HTML"
                                checked={newProject.technologies.includes('HTML')}
                                onChange={handleTechArrayChange}
                            />
                            <label htmlFor="tech-html" className="tech-label">HTML</label>
                        </div>
                        <div className="tech-checkbox">
                            <input
                                type="checkbox"
                                id="tech-css"
                                value="CSS"
                                checked={newProject.technologies.includes('CSS')}
                                onChange={handleTechArrayChange}
                            />
                            <label htmlFor="tech-css" className="tech-label">CSS</label>
                        </div>
                    </div>
                    <button type="submit" className="submit-button">Добавить проект</button>
                </form>
            </div>
            <div className="projects-list-container">
                <h2>Список проектов</h2>
                <ul className="projects-list">
                    {filteredProjects.map((project: Project) => (
                        <li key={project.id} className="project-item">
                            <h3 className="project-title">{project.name}</h3>
                            <p className="project-description">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                Тык
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
