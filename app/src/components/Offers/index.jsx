import React from 'react'
import s from './style.module.css'
import url from './media/Image.png'
import url2 from './media/Image2.png'

export default function Offers() {
  return (
    <section className={s.container}>
      <div className={s.container_inner}>
        <div className={s.left} style={{backgroundImage: `url(${url})`}}>
            <p>Natural!!</p>
            <p>Get Garden Fresh Fruits</p>
        </div>
        <div className={s.right} style={{backgroundImage: `url(${url2})`}}>
            <p>Offer!!</p>
            <p>Get 10% off on Vegetables</p>
        </div>
      </div>
    </section>
  )
}
