import React, { useState } from 'react'

const BookingForm = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: ''
    });

    const { date, time, guests, occasion } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <>
        <form style='display: grid; max-width: 200px; gap: 20px'>
            <label for="res-date">Choose date</label>
            <input type="date" id="res-date" name='date' value={date} onChange={handleChange} />
            <label for="res-time">Choose time</label>
            <select id="res-time " name='time' value={time} onChange={handleChange} >
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" name='guests' value={guests} onChange={handleChange} />
            <label for="occasion">Occasion</label>
            <select id="occasion" name='ocassion' value={occasion} onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    </>
  )
}
export default BookingForm;