import React from 'react'
import s from './style.module.css'
import { useCart } from '../../hooks/useCart'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../store/slice/cartSlice'

export default function CartCalculation() {

    const cart = useCart()
    
    const total = cart.reduce((acc, {price, new_price, count})=> acc + (new_price ?? price) * count, 0)

    const sale = cart.reduce((acc, {price, new_price, count})=> acc + (price - new_price) * count, 0)

    const dispatch = useDispatch()
  return (
    <div className={s.block_sum}>
        <p>Total sum : {total}</p>
        <p>Sale : {sale}</p>
        <button onClick={() => dispatch(clearCart())}>Clear cart</button>
    </div>
  )
}
