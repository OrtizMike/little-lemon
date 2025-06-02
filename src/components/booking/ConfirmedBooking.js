import React from 'react'

const ConfirmedBooking = () => {
  return (
    <section className="confirmed-booking">
      <div className="page-header">
        <h1 className='title'>Reservation Confirmed</h1>
      </div>
      <div className="confirmed-booking container">
        <h1 className='title'>Booking Confirmed</h1>
        <p className='paragraph'>Thank you for your reservation! We look forward to welcoming you.</p>
        <p className='paragraph'>If you have any questions or need to make changes, please contact us.</p>
      </div>
    </section>
  )
}

export default ConfirmedBooking