import React, { useState, useEffect } from 'react';
import ProjectQuickView from './quickview';
import { fetchProjects, fetchSkills } from './firebase';

export default function Example() {
  const [projects, setProjects] = useState([]);
  const [githubScaled, setGithubScaled] = useState({});
  const [urlScaled, setUrlScaled] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [skills, setSkills] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const unsubscribeProjects = fetchProjects(setProjects);
    const unsubscribeSkills = fetchSkills(setSkills);

    return () => {
      unsubscribeProjects();
      unsubscribeSkills();
    };
  }, []);

  const handleGithubMouseEnter = (id) => {
    setGithubScaled((prev) => ({ ...prev, [id]: true }));
  };

  const handleGithubMouseLeave = (id) => {
    setGithubScaled((prev) => ({ ...prev, [id]: false }));
  };

  const handleUrlMouseEnter = (id) => {
    setUrlScaled((prev) => ({ ...prev, [id]: true }));
  };

  const handleUrlMouseLeave = (id) => {
    setUrlScaled((prev) => ({ ...prev, [id]: false }));
  };

  const handleProjectImageClick = (project) => {
    setSelectedProject(project);
    setIsQuickViewOpen(true);
  };

  const handleQuickViewClose = () => {
    setIsQuickViewOpen(false);
    setSelectedProject(null);
  };

  const handleProjectMouseEnter = (id) => {
    setHoveredProject(id);
  };

  const handleProjectMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div className="bg-gray-900 py-10 sm:py-10">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl md:col-start-1 lg:col-start-1 xl:col-start-1">
          <h2 className="text-3xl animated-fade-in-up animate-slideInRight font-bold tracking-tight text-white sm:text-4xl">My Projects</h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 sm:gap-y-3 xl:col-span-5">
          {projects.map((project) => (
            <li key={project.id}>
              <div 
                className="flex flex-col py-2 items-start"
                onMouseEnter={() => handleProjectMouseEnter(project.id)}
                onMouseLeave={handleProjectMouseLeave}
              >
                <img
                  className={`h-40 w-80 sm:h-40 sm:w-80 md:h-40 md:w-80 lg:h-40 lg:w-80 xl:h-40 xl:w-80 rounded object-cover animate-slideInTop cursor-pointer ${hoveredProject === project.id ? 'scale-105' : ''}`}
                  src={project.image}
                  alt={project.id}
                  onClick={() => handleProjectImageClick(project)}
                />
                <div>
                  <h3 className="text-lg animate-slideInLeft font-semibold text-white">{project.name}</h3>
                  <p className="animate-slideInLeft text-gray-400 sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">{project.info}</p>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => handleGithubMouseEnter(project.id)}
                      onMouseLeave={() => handleGithubMouseLeave(project.id)}
                      onClick={(e) => e.stopPropagation()} // Prevent triggering the project image click event
                    >
                      <img className={`h-6 w-6 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 animate-jumpy ${githubScaled[project.id] ? 'scale-110' : ''}`} src="https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/github%20(1).png?alt=media&token=eb89d9c4-1c80-4be8-8124-fc6dceb7add8" alt="GitHub Icon" />
                    </a>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => handleUrlMouseEnter(project.id)}
                        onMouseLeave={() => handleUrlMouseLeave(project.id)}
                        onClick={(e) => e.stopPropagation()} // Prevent triggering the project image click event
                      >
                        <img className={`h-6 w-6 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 animate-jumpy ${urlScaled[project.id] ? 'scale-110' : ''}`} src="https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/link%20(1).png?alt=media&token=6f3eebed-d3f3-4d0d-b1f0-74c6f22c71db" alt="URL Icon" />
                      </a>
                    ) : (
                      <img className="h-6 w-6 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 animate-jumpy" src="https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/chain.png?alt=media&token=e6853ad5-9c7b-40e3-94b0-6e4a4231e37d" alt="Placeholder Icon" />
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedProject && (
        <ProjectQuickView
          project={selectedProject}
          isOpen={isQuickViewOpen}
          onClose={handleQuickViewClose}
          skills={skills}
        />
      )}
    </div>
  );
}
