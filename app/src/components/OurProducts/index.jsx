import React from 'react'
import s from './style.module.css'
import Product from '../Product'
// import img from './media/img.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function OurProducts({count}) {


    const products = useSelector(state => count 
      ? state.products.list.filter(item => Object.values(item.show).every(item=>item)).slice(0, count) 
      : state.products.list.filter(item => Object.values(item.show).every(item=>item))
      );


  return (
    <div >
        <div className={s.container}>
        {
            products.map(item => <Product key={item.id} {...item}/>)
        }
        </div>
        {
          count 
          ? <Link to={'/products'} className={s.btn}>All products</Link>
          : ''
        }
    </div>
  )
}
