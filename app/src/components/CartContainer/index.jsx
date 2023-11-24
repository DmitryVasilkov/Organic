import React from 'react'
import { useSelector } from 'react-redux'
import { useCart } from '../../hooks/useCart'
import CartItem from '../CartItem'
import s from './style.module.css'
import CartCalculation from '../CartCalculation'

export default function CartContainer() {

    const result = useCart()

  return (
    <div className={s.container}>
        {
          result.length === 0 
          ? ''
          : result.map(item => <CartItem key={item.id} {...item}/>)
        }
        <CartCalculation />
    </div>
  )
}



// const products = useSelector(({products}) => products.list
//     .filter(({id}) => list.map(({id}) => id).includes(id)) // оставляем только те продукты, которые есть в корзине
//     .map(item => ({...item, ...list.find(({id}) => id === item.id)})) // добавляем к продукту кол-во в заказе. 
//   )