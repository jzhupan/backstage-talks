import React from 'react'
import Image from 'next/image'

export const Scroll1 = () => {
  return (
    <div>
        <section className='cover-and-info'>
        <Image src='https://placehold.co/300x400/FFC0CB/FFFFFF/png' alt='placeholder image' width={300} height={400}/>
        <h3>Issue #1</h3>
        <h4>BUY HERE (Europe)</h4>
        <h4>BUY HERE (UK & Overseas)</h4>
        <h4>or in selected stores</h4>
        </section>
    </div>
  )
}