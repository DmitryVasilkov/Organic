import React, { useContext, useState } from 'react'
import { HiMagnifyingGlassCircle } from 'react-icons/hi2';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import img from './media/Logo.png'
import s from './style.module.css'
import Checkbox from '../UI/Checkbox';
import { Context } from '../../context';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Nav() {

    const list = useSelector(({cart}) => cart.list)
    const result = list.reduce((akk, elem) => akk + elem.count, 0)

    const {mode, changeMode } = useContext(Context)

    
    const newMode = mode ? 'dark' : 'light'
    
  return (
    <nav className={s.container}>
        <div className={s.left_side}>
            <a href="">
                <img src={img} alt="" />
            </a>
            <p>Organick</p>
        </div>
        <div className={s.links}> 
            <NavLink  to= '/'>Home</NavLink>
            <a href="">About</a>
            <a href="">Pages</a>
            <a href="">Shop</a>
            <a href="">Projects</a>
            <a href="">News</a>
        </div>
        <div className={s.right_side}>
            <div className={s.block_search}>
            <input className={s.input} type="text" />
            <HiMagnifyingGlassCircle className={s.search}/>
            </div>
            <div className={s.block_cart}>
                <Link to={'/cart'} >
                <AiOutlineShoppingCart className={s.cart} />
                <p>Cart ({result})</p>
                </Link>
            <Checkbox onChange={changeMode} label ={newMode} checked={mode}/>
            </div>
        </div>
    </nav>
  )
}


