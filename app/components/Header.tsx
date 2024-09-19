"use client";
import SpinningButton from './SpinningButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '../States/Store/store';
import Link from 'next/link';

function Header() {
  const cartCount = useSelector((state: RootState) => state.cart.count);

  return (
    <nav className='bg-darkNav flex items-center p-4'>
      <Link href={"/"} className='cursor-pointer'>
      <Image
        src="https://links.papareact.com/f90"
        alt="Logo"
        width={150}
        height={50}
        className='mr-4 p-2'
      />  
      </Link>
      <div className="relative flex-grow">
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lightText1 dark:text-darkText1 w-5 h-5"
          aria-label="Search"
        />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 w-full rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
          aria-label="Search input"
        />
      </div>
     <Link href={"/Checkout"}>
      <div className='relative p-2 cursor-pointer'>
        <FontAwesomeIcon 
          icon={faShoppingCart} 
          size="2xl" 
          className='text-darkText1 ml-4'
          aria-label="Shopping cart"
        />
        <p className='text-lightButtonsText bg-darkButtonsBg rounded-full absolute top-0 right-0 
                      w-5 h-5 text-md p-3 flex items-center justify-center font-bold '>
          {cartCount}
        </p>
      </div>
      </Link>
      <SpinningButton />
    </nav>
  );
}

export default Header;
