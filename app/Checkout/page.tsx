"use client"
import { useDispatch, useSelector } from 'react-redux';
import { decrement } from "../States/Reducers/cartCount";
import { decrementQuantity } from "../States/Reducers/cartItems";
import { RootState } from '../States/Store/store';
import Link from 'next/link';
import Image from 'next/image';
import CheckOutProduct from '../components/CheckOutProduct';

const Checkout = () => {
    const products = useSelector((state: RootState) => state.cartItems.products);
    const totalItems=useSelector((state: RootState) => state.cart.count);


    const totalPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0);


return (
<div className='bg-gray-100 lg:flex'>

    <main>
        <div className='flex-grow m-5 shadow-sm'>
            <Image src="https://links.papareact.com/ikj" loading='lazy' alt='Ad' width={1070} height={250} objectFit='contain'/>
            <div className='flex flex-col p-5 space-y-10 bg-white'>
                <h1 className='text-3xl border-b pb-4'>{products.length===0? 'Your Amazon Basket is Empty':"Shopping Basket"}</h1>
                {products.map((product,i)=>(
                    <CheckOutProduct product={product}
                    key={i}/>
                ))}
            </div>
        </div>
    </main>
 
 <div className='flex flex-col  bg-white p-10 shadom-md'>
    {products.length&&(
    <>
    <h2 className='whitespace-nowrap'>Subtotal({totalItems}):<span className='font-bold'>${totalPrice.toFixed(2)}</span> </h2>

    <button className='button mt-2'>Proceed to Checkout</button>
    </>
    
    
    )}
 </div>
</div>
);
};

export default Checkout;
