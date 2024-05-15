import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

function ProjectQuickView({ project, isOpen, onClose }) {
  const [githubScaled, setGithubScaled] = useState({});
  const [urlScaled, setUrlScaled] = useState({});

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

  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:max-w-xlg">
                <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {project.image && (
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-60 w-40 overflow-hidden sm:mx-0 sm:h-60 sm:w-60">
                        <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
                      </div>
                    )}
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-white">
                        {project.name}
                      </Dialog.Title>
                      <div className="mt-2">
                   
                        
                        <div className="mt-4">
                        <p className="text-sm text-gray-300">{project.description}</p>
                        </div>
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-white">Skills</h4>
                          <ul className="list-disc list-inside text-gray-300">
                            {project.skills && project.skills.map((skill, index) => (
                              <li key={index} className="text-sm">{skill}</li>
                            ))}
                          </ul>
                        </div>
                        
                        {project.githubUrl && (
                          <div className="mt-4">
                            <div className="text-sm font-medium text-white">Links</div>
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
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => handleUrlMouseEnter(project.id)}
                                onMouseLeave={() => handleUrlMouseLeave(project.id)}
                                onClick={(e) => e.stopPropagation()} // Prevent triggering the project image click event
                              >
                                <img className={`h-8 w-8 sm:h-5 sm:w-5 animate-jumpy md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 ${urlScaled[project.id] ? 'scale-110' : ''}`} src={project.url ? "https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/link%20(1).png?alt=media&token=6f3eebed-d3f3-4d0d-b1f0-74c6f22c71db" : "https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/chain.png?alt=media&token=e6853ad5-9c7b-40e3-94b0-6e4a4231e37d"} alt="URL Icon" />
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 px-4 py-3 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default ProjectQuickView;
