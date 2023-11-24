import React from 'react'
import { useDispatch } from 'react-redux'
import { decrCount, incrCount } from '../../store/slice/cartSlice'
import s from './style.module.css'

export default function CartItem({id, img, price, new_price, type, title, count}) {

    const dispatch = useDispatch()

  return (
    <div className={s.container}>
      <img className={s.img} src={img} alt={type} />
      <p className={s.title}>{title}</p>
      <div className={s.price_value}>
        <p className={new_price ? s.price : ''}>${price.toFixed(2)}</p>
        {
          new_price && <p className={s.new_price}>${new_price.toFixed(2)}</p>
        }
          </div>
          <div className={s.block}>
            <div>
              <p>Количество в корзине:</p>
            </div>
      <div className={s.block_count}>
        <button onClick={() => dispatch(decrCount(id)) }>-</button>
        <p>{count}$</p>
        <button onClick={() => dispatch(incrCount(id)) }>+</button>
      </div>

          </div>
      
        
      

    </div>
  )
}
