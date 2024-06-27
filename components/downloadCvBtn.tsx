import React, { useState, useRef, useEffect } from 'react';
import { HiDownload } from 'react-icons/hi';

const DownloadCVButton = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
        focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
      >
        Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
      </button>
      {dropdownVisible && (
        <div className='absolute mt-2 bg-white border rounded shadow-lg'>
          <a
            href='/CV_EN.pdf'
            download
            className='block px-4 py-2 text-black hover:bg-gray-200 transition'
          >
            Download in English
          </a>
          <a
            href='/CV_PT.pdf'
            download
            className='block px-4 py-2 text-black hover:bg-gray-200 transition'
          >
            Download in Portuguese
          </a>
          
        </div>
      )}
    </div>
  );
};

export default DownloadCVButton;
