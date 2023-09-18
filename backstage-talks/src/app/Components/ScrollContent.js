import React from 'react'
import { Scroll1 } from './Scroll1'
import { Scroll2 } from './Scroll2'
import { Scroll3 } from './Scroll3'

export const ScrollContent = () => {
  return (
    <div className='container'>
        <section className='child'><Scroll1 /></section>
        {/* <section className='child'><Scroll2 /></section>
        <section className='child'><Scroll3 /></section> */}
    </div>
  )
}
