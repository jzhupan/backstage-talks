import React from 'react'
import bookShelf from '../local-json/bookShelf.json'
import Image from 'next/image'


export const ScrollContent = () => {
  const data = require('../local-json/bookShelf.json')
  console.log(data)
   

  return (
    <div className='scroll-container'>
        {bookShelf && data.map((book) => ( 
              <section className='cover-and-info' key={book.id}
              id={book.id}
              >
                <Image className='book-cover' src={book.imageUrl} alt='placeholder image' width={300} height={400}/>
                <h3>{book.name}</h3>
                <h4>BUY HERE (Europe)</h4>
                <h4>BUY HERE (UK & Overseas)</h4>
                <h4>or in selected stores</h4>
              </section>
              
            ))}
    </div>
  )
}
