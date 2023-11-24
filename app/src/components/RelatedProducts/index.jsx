import React from 'react'
import Product from '../Product'
import { useSelector } from 'react-redux'
import s from './style.module.css'
import { useParams } from 'react-router-dom'

export default function RelatedProducts({category, productId}) {

    
    const products = useSelector(({products}) => products.list.filter(({type, id}) => type === category && id !== +productId))

  return (
    products.length === 0
    ? ''
    :<div>
        <h2 className={s.title}>RelatedProducts</h2>
        <div className={s.container}>
        {
            products.map(item => <Product key={item.id} {...item}/>)
        }
        </div>
    </div>
  )
}
