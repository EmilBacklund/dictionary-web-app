import { HiOutlineMoon, HiMoon } from 'react-icons/hi';
import { BiBook } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useState } from 'react';
import ToggleButton from './ToggleButton';

const Header = ({ font, setFont, toggleTheme, darkMode }) => {
  return (
    <header className='mt-14 flex items-center justify-between'>
      <BiBook className='w-8 h-8 text-secondaryText' />
      <div className='flex divide-headerDivider divide-x items-center'>
        <button className='font-bold font-sans flex items-center gap-4 mr-6' onClick={toggleTheme}>
          {font} <img src='/icon-arrow-down.svg' />
        </button>
        <div className='pl-6 flex'>
          <ToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
