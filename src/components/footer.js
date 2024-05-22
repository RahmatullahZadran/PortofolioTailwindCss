import React, { useContext } from 'react';
import { DarkModeContext } from '../App';

const Footer = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`flex flex-col max-w-[1900px] px-2 py-1 mx-auto justify-between ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-gray-500'} sm:flex-row text-center`}>
      <p className="py-1 animate-jumpy text-white mx-auto">Rahmatullah Zadran Portfolio</p>
      <p className="py-1 animate-jumpy text-white mx-auto">In Progress</p>
    </div>
  );
};

export default Footer;
