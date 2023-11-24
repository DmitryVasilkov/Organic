import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import s from './style.module.css'

export default function SingleProduct({product}) {

    

  return (
<div className={s.container}>
        {
            product
            ?
            <>
            <div className={s.img} style={{backgroundImage: `url('${product.img}')`}}>
                <p className={s.category}>{product.type}</p>
            </div>
                <div className={s.info}>
                    <h1>{product.title}</h1>
                    <div className={s.stars}>
                  {
                    [...new Array(5)].map((_, index) => index+1 <= product.mark 
                    ? <AiFillStar key={index} className={s.star}/>
                    : <AiOutlineStar />
                    )
                  }
                </div>
                    <div className={s.price_value}>
                <p className={product.new_price ? s.price : ''}>${product.price.toFixed(2)}</p>
                {
                  product.new_price && <p className={s.new_price}>${product.new_price.toFixed(2)}</p>
                }
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laborum nam laudantium, quas dolor cupiditate tenetur repellendus consequuntur totam quia id illum, quidem porro. Sint similique veniam dolorem temporibus ducimus?
                  </p>
                </div>
            </>
            : ''
        }
    </div>
    
  )
}
