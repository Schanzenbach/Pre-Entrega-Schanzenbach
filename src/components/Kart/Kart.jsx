import React from 'react';
import './Kart.css';
import { BsCart4 } from "react-icons/bs";

export const Kart = () => {
  return (
    <div className='cart-container'>
        <div className='icon-container'><BsCart4 /></div>
        <div className='cart-amount'>0</div>
    </div>
  )
}
