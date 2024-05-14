import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyA4ZM1BNuWLKae1O5R_gxdAJNiloY9s1qk",
  authDomain: "protofolio-44836.firebaseapp.com",
  databaseURL: "https://protofolio-44836-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "protofolio-44836",
  storageBucket: "protofolio-44836.appspot.com",
  messagingSenderId: "65897675902",
  appId: "1:65897675902:web:b3cecbb868e83a2a2f6c2f",
  measurementId: "G-LTS8XXGHDY"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();

export default function Example() {
  const [projects, setProjects] = useState([]);
  const [githubScaled, setGithubScaled] = useState({});
  const [urlScaled, setUrlScaled] = useState({});

  useEffect(() => {
    const projectsRef = db.ref('Projects');
    projectsRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const projectsArray = Object.values(data);
        setProjects(projectsArray);
      }
    });

    return () => {
      projectsRef.off('value');
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

  return (
    <div className="bg-gray-900 py-10 sm:py-10">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8 lg:px-8 xl:grid-cols-5">
        {/* Project Section */}
        <div className="max-w-2xl md:col-start-1 lg:col-start-1 xl:col-start-1">
          <h2 className="text-3xl animated-fade-in-up animete-slideInRight animate-slideInLeft font-bold tracking-tight text-white sm:text-4xl">My Projects</h2>
        </div>

        {/* People Section */}
        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 sm:gap-y-3 xl:col-span-5">
          {projects.map((project) => (
            <li key={project.id}>
              <div className="flex flex-col items-start">
                <img className="h-60 w-80 sm:h-72 sm:w-80 rounded object-cover animate-slideInTop" src={project.image} alt={project.id} />
                <div>
                  <h3 className="text-lg animate-slideInLeft font-semibold text-white">{project.name}</h3>
                  <p className="text-base text-gray-400">{project.description}</p>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target=""
                      onMouseEnter={() => handleGithubMouseEnter(project.id)}
                      onMouseLeave={() => handleGithubMouseLeave(project.id)}
                    >
                      <img className={`h-4 w-4 sm:h-5 sm:w-5 animate-jumpy md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-6 xl:w-6 ${githubScaled[project.id] ? 'scale-110' : ''}`} src="https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/github%20(1).png?alt=media&token=eb89d9c4-1c80-4be8-8124-fc6dceb7add8" alt="GitHub Icon" />
                    </a>
                    <a
                      href={project.url}
                      target=""
                      onMouseEnter={() => handleUrlMouseEnter(project.id)}
                      onMouseLeave={() => handleUrlMouseLeave(project.id)}
                    >
                      <img className={`h-4 w-4 sm:h-5 sm:w-5 animate-jumpy md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-6 xl:w-6 ${urlScaled[project.id] ? 'scale-110' : ''}`} src="https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/link%20(1).png?alt=media&token=6f3eebed-d3f3-4d0d-b1f0-74c6f22c71db" alt="URL Icon" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
