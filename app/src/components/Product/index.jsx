import React from 'react'
import s from './style.module.css'
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Product({id, title, img, type, price, new_price, mark}) {
  return (
    <Link to={`/product/${id}`} className={s.product}>
        <p className={s.type}>{type}</p>
        <img className={s.img} src={img} alt={type} />
        <p className={s.title}>{title}</p>
        <hr />
        <div className={s.price_block}>
          <div className={s.price_value}>
        <p className={new_price ? s.price : ''}>${price.toFixed(2)}</p>
        {
          new_price && <p className={s.new_price}>${new_price.toFixed(2)}</p>
        }
          </div>
        <div className={s.stars}>
          {
            [...new Array(5)].map((_, index) =>
            index+1 <= mark 
            ? <AiFillStar key={index} className={s.star}/>
            : <AiOutlineStar />
            )
          }
        </div>
        </div>
    </Link>
  )
}

{/* <p className={s.new_price}>{(new_price === null ? '' : <p className={s.new_price}>{price + '$'}</p> )}</p> */}