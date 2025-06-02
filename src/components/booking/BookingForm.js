import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup"

const BookingForm = ({
    availableTimes,
    dispatchOnDateChange,
    submitData,
  }) => {

    const minimumDate = new Date().toISOString().split("T")[0];
    const defaultTime = availableTimes[0];

    const handleDateChange = (e) => {
        console.log("Date changed to:", e.target.value);
        dispatchOnDateChange(e.target.value);
    };

    const formik = useFormik({
        initialValues: {
          date: minimumDate,
          time: defaultTime,
          guests: 1,
          ocassion: "",
        },
        onSubmit: (values) => {
            submitData(values);
        },
        validationSchema: Yup.object({
            date: Yup.date().required("Date is required"),
            time: Yup.string().required("Time is required"),
            guests: Yup.number()
                .min(1, "At least 1 guest is required")
                .max(10, "Maximum of 10 guests allowed")
                .required("Number of guests is required"),
            occasion: Yup.string().required("Occasion is required"),
        }),
      });

  return (
    <>
        <div className="form-header">
            <h2 className='title'>Make a reservation</h2>
            <p className='paragraph'>Fill in the form below to book a table</p>
        </div>
        <div className='reservation-form'>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        minimumdate={minimumDate}
                        id="res-date"
                        name='date'
                        {...formik.getFieldProps("date")}
                        onBlur={handleDateChange}
                    />
                    <span className='form-error'>{formik.errors.date}</span>
                </div>
                <div className='form-group'>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " name='time' {...formik.getFieldProps("time")} >
                        {availableTimes.map((times) => (
                            <option key={times} data-testid="reservation-time-option">
                                {times}
                            </option>
                        ))}
                    </select>
                    <span className='form-error'>{formik.errors.time}</span>
                </div>
                <div className='form-group'>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" name='guests' {...formik.getFieldProps("guests")} />
                    <span className='form-error'>{formik.errors.guests}</span>
                </div>
                <div className='form-group'>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" name='occasion' {...formik.getFieldProps("ocassion")} >
                        <option>Birthday</option>
                        <option>Gather with Friends</option>
                        <option>Anniversary</option>
                    </select>
                    <span className='form-error'>{formik.errors.ocassion}</span>
                </div>
                <input type="submit" value="Reserve Now!" className='btn btn-primary' />
            </form>
        </div>
    </>
  )
}
export default BookingForm;