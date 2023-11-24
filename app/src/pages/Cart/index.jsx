import React from 'react'
import s from './style.module.css'
import CartContainer from '../../components/CartContainer'

export default function Cart() {
  return (
   <>
      <div className={s.img}></div>
        <h2>Cart</h2>
        <CartContainer />
   </>

   
  )
}
