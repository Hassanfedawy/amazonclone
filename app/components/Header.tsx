"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '../States/Store/store';
import Link from 'next/link';

function Header() {
  const cartCount = useSelector((state: RootState) => state.cart.count);

  return (
    <nav>

      {/* Upper Nav */}     
     <div className='bg-amazon_blue-dark flex items-center p-1 py-2 flex-grow'>

      {/* LOGO */}
      <Link href={"/"} className='cursor-pointer flex-grow sm:flex-grow-0'>
      <Image
        src="https://links.papareact.com/f90"
        alt="Logo"
        width={150}
        height={40}
        objectFit='contain'
        className='mr-4 p-2'
      />  
      </Link>

      {/* Search Bar */}
      <div className="hidden sm:flex flex-grow bg-yellow-400 rounded-md cursor-pointer">
       
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 w-full bg-white outline-none rounded-l-md"
          aria-label="Search input"
        />
        <FontAwesomeIcon icon={faSearch} size='xl' className=' p-4  hover:bg-yellow-500  hover:rounded-r-md'/>
      </div>

      {/* RightSide*/}    
      <div className='flex items-center text-white text-sm space-x-3 mx-6 whitespace-nowrap'>
  <div className='cursor-pointer hover:underline'>
  <p>Hello ALhassan</p>
  <p className='font-extrabold '>Account&Lists</p>
  </div>

<div className='cursor-pointer hover:underline'>
  <p>Returns</p>
  <p className='font-extrabold '>&Orders</p>
</div>

     <Link href={"/Checkout"} className='relative p-2 cursor-pointer hover:underline flex items-center'>
     
        <FontAwesomeIcon 
          icon={faShoppingCart} 
          size="2xl" 
          className='text-white'
          aria-label="Shopping cart"
        />
        <p className=' bg-yellow-400 rounded-full absolute top-0 right-0 md:right-12 
                      w-2 h-2 text-md p-3 flex items-center justify-center font-bold text-black'>
          {cartCount}
        </p>
      <p className=' font-extrabold hidden md:inline mt-3'>Basket</p>
      </Link>

      </div>
      
      </div>

      {/*Lower Nav*/}    
     <div className='flex items-center bg-amazon_blue-light pl-6 p-3 space-x-4 text-white text-sm font-semibold'>
      <p className='link'>
<FontAwesomeIcon icon={faBars} size='xl' className='mr-2'/>
Ad
</p>
<p className='link'>Prime video</p>
<p className='link'>Amazon Business</p>
<p className='link'>Today's Deals</p>
<p className='link hidden md:inline'>Electronics</p>
<p className='link hidden md:inline'>Food&Groccery</p>
<p className='link hidden lg:inline'>Prime</p>
<p className='link hidden lg:inline'>Buy Again</p>
<p className='link hidden xl:inline'>Shopper Toolkit</p>
<p className='link hidden xl:inline'>Health&Personal Care</p>

     </div>



    </nav>
  );
}

export default Header;
