// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Function to fetch projects data from Firestore
const fetchProjects = async () => {
  try {
    const projectsCollection = collection(db, 'Projects');
    const projectsSnapshot = await getDocs(projectsCollection);
    const projectsData = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return projectsData;
    console.log('Projects: ', projectsData);
  } catch (error) {
    console.error('Error fetching projects: ', error);
    return [];
  }
};

// Example usage
fetchProjects().then(projects => {
  console.log('Projects: ', projects);
  
});




















// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA4ZM1BNuWLKae1O5R_gxdAJNiloY9s1qk",
//   authDomain: "protofolio-44836.firebaseapp.com",
//   databaseURL: "https://protofolio-44836-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "protofolio-44836",
//   storageBucket: "protofolio-44836.appspot.com",
//   messagingSenderId: "65897675902",
//   appId: "1:65897675902:web:b3cecbb868e83a2a2f6c2f",
//   measurementId: "G-LTS8XXGHDY"
// };

