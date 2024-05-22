import React, { useContext } from 'react';
import { DarkModeContext } from '../App';

const Footer = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`flex flex-col max-w-[1900px] px-2 py-1 mx-auto justify-between ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'} sm:flex-row text-center`}>
      <p className="py-1 animate-jumpy mx-auto">Rahmatullah Zadran Portfolio</p>
      <p className="py-1 animate-jumpy mx-auto">In Progress</p>
    </div>
  );
};

export default Footer;
