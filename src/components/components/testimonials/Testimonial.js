import React from 'react';

const Testimonial = ({ testimonial: { id, name, image, rating, feedback } }) => {
  return (
    <div key={ id } className='testimonial-card'>
      <div className='testimonial-user'>
        <img src={ image } alt={ name } className='testimonial-image' />
        <h3 className='testimonial-name'>{ name }</h3>
      </div>
      <div className='testimonial-rating'>
        { '★'.repeat(rating) }{ '☆'.repeat(5 - rating) }
      </div>
      <p className='testimonial-feedback'>{ feedback }</p>
    </div>
  )
}

export default Testimonial;