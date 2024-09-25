"use client"
import Image from "next/image"
import {useDispatch } from "react-redux";
import { addToCart, decrementQuantity } from "../States/Reducers/cartItems";
import { increment,decrement } from "../States/Reducers/cartCount";
function CheckOutProduct({product}:any) {

    const dispatch = useDispatch()

  return (
    <div className="grid grid-cols-5">
      <Image src={product.images[0]} alt={product.title} width={200} height={200} objectFit="contain"/>

      <div className="col-span-3 mx-5">
        <p>{product.title}</p>
        <p className="text-xs my-2 line-clamp-3">{product.description}</p>
        <p>Quantity:{product.quantity}</p>
        <p>{product.price}</p>
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
      <button className="button mt-auto" onClick={()=>{
        dispatch(addToCart(product))
        dispatch(increment())

      }}>Add to basket</button>

        <button className="button mt-auto" onClick={() => {
        dispatch(decrementQuantity(product.id));
        dispatch(decrement());
        }}>Remove from basket</button>

      </div>
    </div>
  )
}

export default CheckOutProduct
