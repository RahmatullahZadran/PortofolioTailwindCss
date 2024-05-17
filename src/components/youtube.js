import React, { useState, useEffect } from 'react';
import { fetchVideos } from './firebase';

export default function Example() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const unsubscribeVideos = fetchVideos(setVideos);

    return () => {
      unsubscribeVideos();
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

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:col-span-5">
          {videos.map((video) => (
            <li key={video.id} className="flex flex-col items-start">
              <iframe
                className="w-full h-64 sm:h-80"
                src={getEmbedUrl(video.url)}
                title={video.name}
                
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
