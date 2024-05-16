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
        setVideos(videosArray.reverse());
      }
    });

    return () => {
      videosRef.off('value');
    };
  }, []);

  const getEmbedUrl = (url) => {
    const urlParts = url.split('v=');
    if (urlParts.length > 1) {
      const videoId = urlParts[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  return (
    <div className="bg-gray-900 py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl md:col-start-1 lg:col-start-1 xl:col-start-1 mb-6">
          <h2 className="text-3xl animated-fade-in-up animate-slideInRight font-bold tracking-tight text-white sm:text-4xl">My YouTube Videos</h2>
        </div>

        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:col-span-5">
          {videos.map((video) => (
            <li key={video.id} className="flex flex-col items-start">
              <iframe
                className="w-full h-64 sm:h-80"
                src={getEmbedUrl(video.url)}
                title={video.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <h3 className="text-lg animate-slideInLeft font-semibold text-white mt-2">{video.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
