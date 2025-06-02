import React, { useState, useEffect } from 'react'
import Dish from '../components/dishes/Dish';

const Menu = () => {
  const [loading, setLoading] = useState(true);
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/d542b9ad99f501ab3dbf")
      .then((response) => response.json())
      .then((dog) => {
        setDishes(dog);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="page-header">
        <h1 className='title'>Our Menu</h1>
      </div>
      <section className="special-dishes container">
        <div className='dishes'>
          {dishes.map(dish => (
            <Dish key={dish.id} dish={ dish } imgUrl={ true } />
          ))}
        </div>
      </section>
    </>
  )
}
export default Menu;;