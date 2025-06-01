import React from 'react';
import './Testimonials.css';
import Testimonial from './Testimonial';

const Testimonials = () => {
  const testimonials = [ {
    id: 1,
    name: 'John Doe',
    feedback: 'The food was amazing! Best dining experience ever.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/34.jpg' // Placeholder for image path
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'Great atmosphere and friendly staff. Highly recommend!',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/68.jpg' // Placeholder for image path
  },
  {
    id: 3,
    name: 'Alice Johnson',
    feedback: 'Delicious food and quick service. Will come again!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg' // Placeholder for image path
  },
  {
    id: 4,
    name: 'Bob Brown',
    feedback: 'Fantastic experience! The dishes were exquisite.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/85.jpg' // Placeholder for image path
  },
]
  return (
    <section className="testimonials">
      <h2 className='subtitle'>Testimonials</h2>
      <div className='testimonial-list'>
        {testimonials.map(testimonial => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials;