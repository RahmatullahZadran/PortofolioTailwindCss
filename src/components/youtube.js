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
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const videosRef = db.ref('Youtub');
    videosRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const videosArray = Object.values(data);
        setVideos(videosArray.reverse()); // Reverse the array here if you want the latest videos first
      }
    });

    return () => {
      videosRef.off('value');
    };
  }, []);

  return (
    <div className="bg-gray-900 py-10 sm:py-10">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl md:col-start-1 lg:col-start-1 xl:col-start-1">
          <h2 className="text-3xl animated-fade-in-up animete-slideInRight animate-slideInLeft font-bold tracking-tight text-white sm:text-4xl">My YouTube Videos</h2>
        </div>

        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 sm:gap-y-3 xl:col-span-5">
          {videos.map((video) => (
            <li key={video.id}>
              <div className="flex flex-col items-start">
                <iframe
                  className="h-60 w-80 sm:h-72 sm:w-80 rounded object-cover animate-slideInTop"
                  src={video.url.replace("watch?v=", "embed/")}
                  title={video.name}
                  allowFullScreen
                ></iframe>
                <div>
                  <h3 className="text-lg animate-slideInLeft font-semibold text-white mt-2">{video.name}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
