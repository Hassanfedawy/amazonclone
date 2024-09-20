"use client"
import { useDispatch, useSelector } from 'react-redux';
import { decrement } from "../States/Reducers/cartCount";
import { decrementQuantity } from "../States/Reducers/cartItems";
import { RootState } from '../States/Store/store';
import Link from 'next/link';
import Image from 'next/image';

const Checkout = () => {
    const products = useSelector((state: RootState) => state.cartItems.products);
    const totalItems=useSelector((state: RootState) => state.cart.count);
    const dispatch = useDispatch();

/*     const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);
 */
    // Calculate total price of products
    const totalPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

    // Calculate shipping fee (10% of total price - $5)
    const shippingFee = Math.max(totalPrice * 0.1 - 5, 0); // Ensures the shipping fee is never negative

    // Calculate total cost (price + shipping fee)
    const totalCost = totalPrice + shippingFee;

return (
<div className='min-h-screen '>
{products.length === 0 ? (
<div className='grid grid-cols-4 bg-lightBg h-3/6'>
    <div className='mt-5 border-gray-600 border-2 p-5 col-span-3 bg-lightCardBg shadow-lg flex flex-col justify-center items-center ml-4 '>
        <h1 className='text-2xl font-bold text-lightText1'>Your Cart is empty</h1>
        <Link href={"/"} className='relative text-lightText2 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-lightText2 after:transition-all after:duration-150 after:ease-in-out hover:after:w-full'>
            See our deals
        </Link>
    </div>
</div>
) : (
<div className='flex flex-col md:flex-row gap-8 bg-lightBg dark:bg-darkBg p-4'>
    <ul className='border-[1px] border-x-gray-300 dark:border-white mt-4 w-full md:w-2/3 bg-lightCardBg dark:bg-darkCardBg'>
        {products.map((product: any) => (
            <li className='flex flex-col md:flex-row items-start my-4 border-b border-black dark:border-white' key={product.id}>
                <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={200}
                    height={200}
                    className='border-[1px] border-black dark:border-white mx-2'
                />
                <div className='flex flex-col items-start justify-start p-2'>
                    <h1 className='text-xl md:text-2xl font-bold text-lightText1 dark:text-darkText1'>{product.title}</h1>
                    <p className='max-w-full md:max-w-[430px] text-lightText2 text-base md:text-lg font-medium dark:text-darkText2'>Description: {product.description}</p>
                    <p className='text-base text-lightText2 dark:text-darkText2'>In stock: {product.stock}</p>
                    <p className='text-base md:text-lg text-lightText2 dark:text-darkText2'>Quantity: {product.quantity}</p> {/* Display quantity */}
                    <p className='text-lg md:text-xl font-semibold text-lightText1 dark:text-darkText1'>Price: ${product.price}</p>
                </div>
                <button className='px-6 py-3 bg-red-500 text-white text-base font-semibold rounded-md my-2 md:my-auto mx-auto'
                    aria-label={`Remove ${product.title} from cart`}
                    onClick={() => {
                        dispatch(decrement());
                        dispatch(decrementQuantity(product.id));
                    }}>
                    Delete Item
                </button>
            </li>
        ))}
    </ul>
    <div className='flex flex-col bg-lightCardBg dark:bg-darkCardBg justify-between md:justify-around w-full md:w-1/4 max-h-96 border-black border-2 mt-4 p-6 dark:border-white'>
        <div>
            <p className='font-semibold text-base md:text-lg text-lightText2 dark:text-darkText2'>Items Purchased: {totalItems}</p>
            <p className='font-semibold text-base md:text-lg text-lightText2 dark:text-darkText2'>Price: ${totalPrice.toFixed(2)}</p>
            <p className='font-semibold text-base md:text-lg text-lightText2 dark:text-darkText2'>Shipping Fee: ${shippingFee.toFixed(2)}</p>
            <h2 className='font-extrabold text-lg md:text-xl text-lightText1 dark:text-darkText1 mt-4 md:mt-6'>Total price: ${totalCost.toFixed(2)}</h2>
        </div>
        <button className='bg-lightButtonsBg font-bold text-base md:text-lg text-lightButtonsText py-3 rounded-lg hover:bg-lightHoverButtonsBg'>
            Check Out
        </button>
    </div>
</div>

)}
</div>
);
};

export default Checkout;
