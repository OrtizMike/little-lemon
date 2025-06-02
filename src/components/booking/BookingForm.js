import React, { useState } from 'react'


const BookingForm = ({
    availableTimes,
    dispatchOnDateChange,
    submitData,
  }) => {
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
        submitData(formData);
    }

  return (
    <>
        <div className="form-header">
            <h2 className='title'>Make a reservation</h2>
            <p className='paragraph'>Fill in the form below to book a table</p>
        </div>
        <div className='reservation-form'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label for="res-date">Choose date</label>
                    <input type="date" id="res-date" name='date' value={date} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label for="res-time">Choose time</label>
                    <select id="res-time " name='time' value={time} onChange={handleChange} >
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label for="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" name='guests' value={guests} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label for="occasion">Occasion</label>
                    <select id="occasion" name='occasion' value={ occasion } onChange={handleChange} >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <input type="submit" value="Reserve Now!" className='btn btn-primary' />
            </form>
            <div className='reservation-details'>
                <h3 className='subtitle'>Your reservation details</h3>
                <ul className='paragraph'>
                    <li><span className='label'>Date:</span> {date || 'Not selected'}<br /></li>
                    <li><span className='label'>Time:</span> {time || 'Not selected'}<br /></li>
                    <li><span className='label'>Guests:</span> {guests || '1'}<br /></li>
                    <li><span className='label'>Occasion:</span> {occasion || 'None'}</li>
                </ul>
            </div>
        </div>
    </>
  )
}
export default BookingForm;