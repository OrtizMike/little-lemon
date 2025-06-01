import React from 'react';
import './Dish.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

const Dish = ({ dish: {id, name, image, description, price }}) => {
  return(
    <article key={id} className='dish'>
      <div className='dish-img'>
        <img src={image} alt={name} />
      </div>
      <div className='dish-info'>
        <div className='dish-header'>
          <h3>{name}</h3>
          <span className='dish-price'>{price}</span>
        </div>
        <p className='dish-description'>{description}</p>
        <p className='order-delivery'>Order a delivery <FontAwesomeIcon className='fa-icon' icon={faMotorcycle} /></p>
      </div>
    </article>
  )
}
export default Dish;