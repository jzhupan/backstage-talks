import React from 'react'
import { Scroll1 } from './Scroll1'
import { Scroll2 } from './Scroll2'
import { Scroll3 } from './Scroll3'
import { Scroll4 } from './Scroll4'
import { Scroll5 } from './Scroll5'

export const ScrollContent = () => {
  return (
    <div className='scroll-container'>
        <section className='child'><Scroll1 /></section>
        <section className='child'><Scroll2 /></section>
        <section className='child'><Scroll3 /></section>
        <section className='child'><Scroll4 /></section>
        <section className='child'><Scroll5 /></section>
    </div>
  )
}
