"use client";  // Ensure this is at the top of the file

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
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
  quantity: number; // Added quantity property to track number of items
}

interface ProductProps {
  product: Data;
}

function Product({ product }: ProductProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev); // Toggle the flip state
  };

  const dispatch=useDispatch();
  

  return (
    <div className="w-auto h-auto perspective mx-auto">
      <motion.div
        className="relative bg-lightCardBg dark:bg-darkCardBg rounded-md shadow-lg"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FrontCard */}
        <motion.div
          className="flex flex-col justify-between p-4 h-[550px] cursor-pointer"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={product.images[0]}
            alt={product.title}
            width={200}
            height={200}
            className="mx-auto"
          />
          <div className="flex flex-col justify-around h-full">
            <h2 className="font-semibold text-lightText1 dark:text-darkText1">
              {product.title}
            </h2>
            <p className="font-medium text-lightText2 dark:text-darkText2 line-clamp-2">
              {product.description}
            </p>

            <p className="font-semibold text-xl text-lightText1 dark:text-darkText1">
              ${product.price}
            </p>
          </div>

          <button
            className="w-full text-lightButtonsText dark:text-darkButtonsText
                         bg-lightButtonsBg hover:bg-lightHoverButtonsBg
                         rounded-lg p-2 font-semibold"
                         onClick={() => {
                          dispatch(increment());
                          dispatch(addToCart(product));
                        }}
          >
            Add to Cart
          </button>

          {/* Flip Button on Front */}
          <button
            onClick={handleFlip}
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-md text-black dark:text-white"
          >
            Flip
          </button>
        </motion.div>

        {/* BackCard */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4 bg-lightCardBg dark:bg-darkCardBg text-lightText1 dark:text-darkText1 rounded-md"
          style={{ backfaceVisibility: "hidden", rotateY: 180 }}
        >
          <p>{product.description}</p>

          {/* Flip Button on Back */}
          <button
            onClick={handleFlip}
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-md text-lightText1 dark:text-darkText1"
          >
            Flip
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Product;
