import React, { useState, useEffect, useContext } from 'react';
import { fetchVideos } from './firebase';
import { DarkModeContext } from '../App';

export default function Example() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const unsubscribeVideos = fetchVideos(setVideos, setError);

    return () => {
      unsubscribeVideos();
    };
  }, []);

  const getEmbedUrl = (url) => {
    let videoId;
    if (url.includes('youtube.com')) {
      const urlParts = url.split('v=');
      videoId = urlParts.length > 1 ? urlParts[1].split('&')[0] : null;
    } else if (url.includes('youtu.be')) {
      videoId = url.split('/').pop();
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  return (
    <div className={`py-10 sm:py-10 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl md:col-start-1 lg:col-start-1 xl:col-start-1 mb-6">
          <h2 className={`text-3xl animated-fade-in-up animate-slideInRight font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>
            My YouTube Videos
          </h2>
        </div>

        {error ? (
          <div className="text-red-500">{error.message}</div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:col-span-5">
            {videos.length > 0 ? (
              videos.map((video) => (
                <li key={video.id} className="flex flex-col items-start">
                  <iframe
                    className="w-full h-64 sm:h-80"
                    src={getEmbedUrl(video.url)}
                    title={video.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <h3 className={`text-lg animate-slideInLeft font-semibold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {video.name}
                  </h3>
                </li>
              ))
            ) : (
              <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>No videos available</div>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
