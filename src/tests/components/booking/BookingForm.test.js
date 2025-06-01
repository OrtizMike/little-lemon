import { render, screen } from "@testing-library/react";
import BookingForm from '../../../components/booking/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

// screen.getByText("BookingForm");
// updateTimes
// initializeTimes