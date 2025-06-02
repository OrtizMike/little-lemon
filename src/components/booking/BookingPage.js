import React from 'react'
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from "../../utils/mockAPI";
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';
import './BookingPage.css'; 

const BookingPage = () => {

  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };

  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate("/ConfirmedBooking");
  };

  return (
    <>
      <div className="page-header">
          <h1 className='title'>Reservations</h1>
      </div>
      <section className="booking-form container">
        <BookingForm 
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
      </section>
    </>
  )
}
export default BookingPage;