import './navBar.css';
import logo from "./assets/pokeball-pokemon-svg.svg";

import React from 'react'
import { Kart } from '../Kart/Kart';

const NavBar = () => {
  return (
    <nav>
        <div className='brand-container'>
            <div className="logo-container">
                <a href=""><img className="logo" src ={logo} alt="Logo Pokeball" /></a>         
            </div>
            <div className="filter-container">
                <input className="filter-input" type="text" placeholder='Ej.: Remera Pikachu'/>
            </div>
            <div className="kart-container">
                <Kart/>
            </div>
            <div className="login-container">
                <div id="login-container"><a href="">Iniciar Sesión/Registrarse</a></div>
            </div>
        </div>
        <div className='menus-container'>
            <div className='a-container'><a href="">PELUCHES</a></div>
            <div className='a-container'><a href="">ROPA</a></div>
            <div className='a-container'><a href="">HOGAR</a></div>
        </div>
    </nav>
  )
}

export default NavBar