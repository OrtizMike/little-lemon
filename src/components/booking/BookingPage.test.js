import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingPage from "./BookingPage";

describe("BookingPage page", () => {
    const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    beforeEach(() => {
        render(
            <MemoryRouter>
                <BookingPage />
            </MemoryRouter>
        );
    });

    test('renders BookingPage component', () => {
        const bookingPageElement = screen.getByText(/Make a reservation/i);
        const paragraphPageElement = screen.getByText(/Fill in the form below to book a table/i);

        expect(bookingPageElement).toBeInTheDocument();
        expect(paragraphPageElement).toBeInTheDocument();
    });

    test("should have one or more available reservation time options", async () => {
        const timeOptions = await screen.findAllByTestId("reservation-time-option");

        expect(timeOptions.length).toBeGreaterThanOrEqual(1);

        timeOptions.forEach((timeOption) =>
            expect(timeOption.value).toMatch(timeFormat)
        );
    });

    test("should update available reservation time options when changing reservation date", async () => {
        const reservationDate = "2025-08-10";
        const dateInput = screen.getByLabelText(/Choose date/);
        const initialTimeOptions = await screen.findAllByTestId("reservation-time-option");

        fireEvent.change(dateInput, { target: { value: reservationDate } });
        fireEvent.blur(dateInput);

        const updatedTimeOptions = await screen.findAllByTestId("reservation-time-option");

        expect(dateInput).toHaveValue(reservationDate);

        initialTimeOptions.forEach((timeOption) =>
            expect(timeOption.value).toMatch(timeFormat)
        );

        updatedTimeOptions.forEach((timeOption) =>
            expect(timeOption.value).toMatch(timeFormat)
        );

        expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
    });
});