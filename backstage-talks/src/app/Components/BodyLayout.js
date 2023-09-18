import React from 'react'
import { ScrollContent } from './ScrollContent'

export const BodyLayout = () => {
    

  return (
    <div className='body-container'>
        <ScrollContent />
        <section className='info-text'>
        <p>Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.</p>
        <h6>© 2023 Published by Büro Milk</h6>
        <h5>Privacy Policy</h5>
        </section>
        <section className='sidebar-nav'>
            <li>Issue #1</li>
            <li>Issue #2</li>
            <li>Issue #3</li>
            <li>Issue #4</li>
            <li>Issue #5</li>
            <li>Issue #6</li>
            <li>Issue #7</li>
        </section>
    </div>
  )
}
