import React from 'react'
import s from './style.module.css'
import img from './media/bg.jpg'
import SingleProduct from '../../components/SingleProduct'
import RelatedProducts from '../../components/RelatedProducts'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ProductPage() {

  const { productId } = useParams();

    const {list, status} = useSelector(({products}) => products)

    if(status !== 'ready'){
      return ''
    }else{
      const product = list.find(({id}) => id === +productId)
    

  return (
    // <img className={s.img} src={img} alt="product" />
    <>
    <div className={s.img}>
        <h2>Shop Single</h2>
    </div>
        <SingleProduct product={product} />
        <RelatedProducts category={product.type}  productId={productId}/>
    </>
  )
}
}



// const product = useSelector(({products}) => products.list.find(({id}) => id === +productId))
