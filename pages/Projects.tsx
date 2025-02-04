import { useState } from 'react';
import { projects } from '../data/projects';
import { Project } from '../Types/Project';

export const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) =>
    selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
  );

  return (
    <div>
      {/* Фильтр по технологиям */}
      <select
        value={selectedTech}
        onChange={(e) => setSelectedTech(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px', fontSize: '16px' }}
      >
        <option value="All">Все технологии</option>
        <option value="React">React</option>
        <option value="TypeScript">TypeScript</option>
        {/* Другие технологии */}
      </select>

      {/* Список проектов */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: '#333', // Темно-серый фон
              color: 'white', // Белый текст
              padding: '20px',
              borderRadius: '8px',
              transition: 'transform 0.2s, box-shadow 0.2s',
              transform: 'scale(1)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer', // Курсор в виде указателя
              width: '300px', // Фиксированная ширина каждого проекта
              margin: '10px', // Отступы между проектами
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
            onClick={() => setSelectedProject(project)}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Технологии: {project.technologies.join(', ')}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#61dafb', textDecoration: 'none' }} // Стиль для ссылки
            >
              Ссылка на проект
            </a>
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'black', // Черный фон
            color: 'white', // Белый текст
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)', // Тень для контраста
            zIndex: 1000,
            width: '80%', // Ширина модального окна
            maxWidth: '600px', // Максимальная ширина
          }}
        >
          <h2>{selectedProject.title}</h2>


          <p>{selectedProject.description}</p>
          <p>Технологии: {selectedProject.technologies.join(', ')}</p>
          <a
            href={selectedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#61dafb', textDecoration: 'none' }} // Стиль для ссылки
          >
            Ссылка на проект
          </a>
          <button
            onClick={() => setSelectedProject(null)}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#333', // Темно-серый фон кнопки
              color: 'white', // Белый текст кнопки
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Закрыть
          </button>
        </div>
      )}
    </div>
  );
};
