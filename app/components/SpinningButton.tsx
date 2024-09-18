"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { faSun,faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SpinningButton = () => {

  const [isDark,setIsDark]=useState(false);
  const toggleDarkMode=()=>{
setIsDark(!isDark)
if(!isDark)
document.documentElement.classList.add('dark')
else
document.documentElement.classList.remove('dark')

  }
  return (
    <motion.button
    whileHover={{ rotate: 360 }}
    whileTap={{rotate:360}}
    initial={{ rotate: 0 }}
    transition={{type: 'spring', stiffness: 50, damping: 15}}
    className=" text-white font-bold py-2 px-4 rounded"
  onClick={toggleDarkMode}
    >
      
     {isDark ? <FontAwesomeIcon icon={faSun} size='lg' className='text-darkText1 w-5 h-5  '/> : 
               <FontAwesomeIcon icon={faMoon} size='lg'className='text-darkText1 w-5 h-5'/> }
     
    </motion.button>
  );
};

export default SpinningButton;
