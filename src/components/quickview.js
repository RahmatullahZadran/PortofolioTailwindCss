import React from 'react';
import { Dialog, Transition } from '@headlessui/react';

function ProjectQuickView({ project, isOpen, onClose }) {
  if (!project) return null;

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
          <div className="fixed inset-0 bg-gray-3 bg-opacity-75 transition-opacity" />
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {project.image && (
                      <div className="mx-auto flex-shrink-0  flex items-center justify-center h-60 w-40 overflow-hidden sm:mx-0 sm:h-60  sm:w-60">
                        <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
                      </div>
                    )}
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        {project.name}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{project.description}</p>
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-700">Skills</h4>
                          <ul className="list-disc list-inside">
                            {project.skills && project.skills.map((skill, index) => (
                              <li key={index} className="text-sm text-gray-500">{skill}</li>
                            ))}
                          </ul>
                        </div>
                        {project.url && (
                          <div className="mt-4">
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Visit Project
                            </a>
                          </div>
                        )}
                        {project.githubUrl && (
                          <div className="mt-4">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              <img className={`h-4 w-4 sm:h-5 sm:w-5 animate-jumpy md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-6 xl:w-6 ? 'scale-110' : ''}`} src="https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/link%20(1).png?alt=media&token=6f3eebed-d3f3-4d0d-b1f0-74c6f22c71db" alt="URL Icon" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
