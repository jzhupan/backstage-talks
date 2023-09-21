
import bookShelf from '../local-json/bookShelf.json'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react';


export const ScrollContent = () => {

  const data = require('../local-json/bookShelf.json')
  //console.log(data)

  const targetRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element is visible! 🎉", entry);
        } else {
          console.log("Element is not visible. 😢");
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
 

  return (
    <div className='scroll-container'  >
        {bookShelf && data.map((book) => ( 
              <section className='child' key={book.id} 
              id={book.id}
              
              >
                <Image className='book-cover' src={book.imageUrl} alt='placeholder image' width={300} height={400} ref={targetRef}/>
                <h3>{book.name}</h3>
                <h4>BUY HERE (Europe)</h4>
                <h4>BUY HERE (UK & Overseas)</h4>
                <h4>or in selected stores</h4>
              </section>
              
            ))}
    </div>
  )
}
