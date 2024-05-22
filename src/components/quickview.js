import React, { useState, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { DarkModeContext } from '../App';

function ProjectQuickView({ project, isOpen, onClose, skills }) {
  const [githubScaled, setGithubScaled] = useState({});
  const [urlScaled, setUrlScaled] = useState({});
  const { isDarkMode } = useContext(DarkModeContext);

  if (!project) return null;

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

  const getSkillIcon = (skillName) => {
    const skill = skills.find((s) => s.name === skillName);
    return skill ? skill.Icon : null;
  };

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
            <Transition.Child>
              <Dialog.Panel className={`relative transform overflow-hidden rounded-lg shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  {project.image && (
                    <div className="flex items-center justify-center h-50 w-90 overflow-hidden sm:h-60 sm:w-90 xl:h-80 xl:w-90">
                      <img src={project.image} alt={project.name} className="h-full w-full" />
                    </div>
                  )}
                  <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="text-center sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium">
                        {project.name}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm">{project.description}</p>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium">Skills</h4>
                        <div className="flex justify-start mt-1">
                          {project.skills && project.skills.map((skill, index) => (
                            <img 
                              key={index} 
                              src={getSkillIcon(skill)} 
                              alt={skill} 
                              title={skill} 
                              className="h-8 w-8 sm:h-5 sm:w-5 animate-jumpy md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 mr-2" 
                            />
                          ))}
                        </div>
                      </div>
                      {project.githubUrl && (
                        <div className="mt-4">
                          <div className="text-sm font-medium">Links</div>
                          <div className="flex space-x-2 mt-1">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onMouseEnter={() => handleGithubMouseEnter(project.id)}
                              onMouseLeave={() => handleGithubMouseLeave(project.id)}
                              onClick={(e) => e.stopPropagation()} // Prevent triggering the project image click event
                            >
                              <img className={`h-8 w-8 sm:h-5 sm:w-5 animate-jumpy md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 ${githubScaled[project.id] ? 'scale-110' : ''}`} src="https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/github%20(1).png?alt=media&token=eb89d9c4-1c80-4be8-8124-fc6dceb7add8" alt="GitHub Icon" />
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
                                <img
                                  className={`h-8 w-8 xsm:h-3 sm:h-5 sm:w-5 animate-jumpy md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 ${urlScaled[project.id] ? 'scale-110' : ''}`}
                                  src="https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/link%20(1).png?alt=media&token=6f3eebed-d3f3-4d0d-b1f0-74c6f22c71db"
                                  alt="URL Icon"
                                />
                              </a>
                            ) : (
                              <img
                                className="h-8 w-8 xsm:h-3 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8"
                                src="https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/chain.png?alt=media&token=e6853ad5-9c7b-40e3-94b0-6e4a4231e37d"
                                alt="URL Icon"
                              />
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'} px-4 py-3 sm:flex sm:flex-row-reverse`}>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={onClose}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ProjectQuickView;
