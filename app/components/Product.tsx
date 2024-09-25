"use client";  // Ensure this is at the top of the file

import Image from "next/image";
import { useDispatch } from "react-redux";
import { increment } from "../States/Reducers/cartCount";
import { addToCart } from "../States/Reducers/cartItems";


interface Data {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  quantity?: number; // Added quantity property to track number of items
}

interface ProductProps {
  product: Data;
}

function Product({ product }: ProductProps) {
 

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const productWithQuantity = {
      ...product,
      quantity: product.quantity ?? 0, // Ensure the product has a quantity
    };

    dispatch(increment());
    dispatch(addToCart(productWithQuantity));
  };

  return (
  <section className="bg-white z-30 flex flex-col relative m-5 p-10 mx-auto rounded-md">

    <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">{product.category}</p>
    <Image loading='lazy' src={product.images[0]} alt={product.title} width={200} height={150}className="mx-auto"/>
    <h4 className="my-3">{product.title}</h4>
    <p className="text-xs my-2 line-clamp-2">{product.description}</p>
    <div>
      <p className="mb-5">${product.price}</p>
    </div>
    <button className=" mt-auto button" onClick={()=>{
      handleAddToCart()
    }}>Add to Basket</button>
  </section>
    )
  }
export default Product;
