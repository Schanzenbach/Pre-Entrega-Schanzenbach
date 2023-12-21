import React from 'react';
import './Kart.css';
import { BsCart4 } from "react-icons/bs";

export const Kart = () => {
  return (
    <div className='cart-container'>
        <BsCart4 className='kart-icon' size="3em"/>
        <p>0</p>         
    </div>
  )
}
