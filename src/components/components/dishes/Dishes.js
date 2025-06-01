import React from 'react';
import Dish from './Dish';
import './Dishes.css';
import GreekSalad from '../../../images/greek-salad.jpg';
import Brucheta from '../../../images/bruchetta.svg';
import LemonDessert from '../../../images/lemon-dessert.jpg';

const Dishes = () => {
  const dishes = [{
    id: 1,
    name: 'Greek Salad',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: '$12.99',
    image: GreekSalad
  },
  {
    id: 2,
    name: 'Brucheta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    price: '$5.99',
    image: Brucheta
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    price: '$5.00',
    image: LemonDessert
  }]
  return (
    <section className="special-dishes container">
      <div className="section-header-splitted">
        <h2 className='subtitle'>Specials</h2>
        <button className='btn btn-primary'>Online Menu</button>
      </div>
      <div className='dishes'>
        {dishes.map(dish => (
          <Dish key={dish.id} dish={ dish } />
        ))}
      </div>
    </section>
  )
}
export default Dishes;