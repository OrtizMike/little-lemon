import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
    const mockAvailableTimes = ['10:00 AM', '11:00 AM'];
    const today = new Date().toISOString().split("T")[0];
    const mockDispatchOnDateChange = jest.fn();
    const mockSubmitData = jest.fn();

    beforeEach(() => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatchOnDateChange={mockDispatchOnDateChange}
                submitData={mockSubmitData}
            />
        );
    });


    test('renders BookingForm component with correct title and paragraph', () => {
        const titleElement = screen.getByText(/make a reservation/i);
        const paragraphElement = screen.getByText(/fill in the form below to book a table/i);

        expect(titleElement).toBeInTheDocument();
        expect(paragraphElement).toBeInTheDocument();
    });

    test('renders BookingForm component', () => {
        const formElement = screen.getByRole('form');
        expect(formElement).toBeInTheDocument();
    });

    test('displays available times', () => {
        mockAvailableTimes.forEach(time => {
            expect(screen.getByText(time)).toBeInTheDocument();
        });
    });

    test('calls dispatchOnDateChange when date is changed', () => {
        const dateInput = screen.getByLabelText(/date/i);
        fireEvent.change(dateInput, { target: { value: '2025-10-01' } });
        fireEvent.blur(dateInput);

        expect(mockDispatchOnDateChange).toHaveBeenCalled();
    });

    test('calls submitData with default values on form submission', async () => {
        await fireEvent.click(screen.getByRole('button'))

        await waitFor(() =>
            expect(mockSubmitData).toHaveBeenCalledWith({
            date: today,
            time: mockAvailableTimes[0],
            guests: 1,
            occasion: 'Birthday'
            }),
        )
    });


    test(`should display an error message and disable sumbit button when date
        field's value is empty`, async () => {

        const dateInput = screen.getByLabelText(/date/i);
        fireEvent.change(dateInput, { target: { value: '' } });
        fireEvent.blur(dateInput);

        const errorMessage = screen.getByRole("date-error");
        const submitButton = screen.getByRole("button");

        await fireEvent.click(submitButton)

        expect(errorMessage).toBeInTheDocument();

        await waitFor(() =>
            expect(errorMessage).toHaveTextContent("Date is required")
        )

        expect(submitButton).toBeDisabled();
    });

    test(`should display an error message and disable sumbit button when number of
    guests field's value is empty`, async () => {
        const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
        fireEvent.change(numberOfGuestsInput, { target: { value: 0 } });
        fireEvent.blur(numberOfGuestsInput);

        const errorMessage = screen.getByRole("guests-error");
        const submitButton = screen.getByRole("button");

        expect(errorMessage).toBeInTheDocument();

        await waitFor(() =>
            expect(errorMessage).toHaveTextContent("At least 1 guest is required")
        )

        expect(submitButton).toBeDisabled();
    })
});
