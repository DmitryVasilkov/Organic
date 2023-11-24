import React from 'react'
import Offers from '../../components/Offers'
import OurProducts from '../../components/OurProducts'

export default function MainPage() {
  return (
    <div>
        <Offers />
        <OurProducts count={8} />
    </div>
  )
}
