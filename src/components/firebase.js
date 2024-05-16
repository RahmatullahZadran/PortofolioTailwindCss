// firebaseService.js
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

export const fetchProjects = (callback) => {
  const projectsRef = db.ref('Projects');
  projectsRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const projectsArray = Object.values(data).reverse();
      callback(projectsArray);
    }
  });

  return () => {
    projectsRef.off('value');
  };
};

export const fetchSkills = (callback) => {
  const skillsRef = db.ref('Skills');
  skillsRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const skillsArray = Object.values(data);
      callback(skillsArray);
    }
  });

  return () => {
    skillsRef.off('value');
  };
};
export const fetchVideos = (callback) => {
  const videosRef = db.ref('Youtub');
  videosRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const videosArray = Object.values(data).reverse();
      callback(videosArray);
    }
  });

  return () => {
    videosRef.off('value');
  };
};