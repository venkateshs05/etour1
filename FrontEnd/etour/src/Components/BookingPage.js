import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
    const [bookingId, setBookingId] = useState(null);
    const [passengerName, setPassengerName] = useState('');
    const [passengers, setPassengers] = useState([]);
    const navigate = useNavigate();

    const handleCreateBooking = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body :JSON.stringify({
                    "booking_date": "2014-08-10",
                    "no_of_pax": 4,
                    "taxes": 50.00,
                    "total_amount": 500.00,
                    "tour_amount": 450.00,
                    "cust_id": 1,
                    "departure_id": 1,
                    "tour_id": 1
                }),
                  
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log("hello");
            const data = await response.json();
            setBookingId(data.bookingId);
        } catch (error) {
            console.error('Error creating booking:', error);
        }
    };

    const handleAddPassenger = async () => {
        if (passengerName.trim() === '') return;

        try {
            const response = await fetch('http://localhost:8080/api/passengers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ bookingId, name: passengerName }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setPassengers([...passengers, passengerName]);
            setPassengerName('');
        } catch (error) {
            console.error('Error adding passenger:', error);
        }
    };

    const handleDone = async () => {
        try {
            await fetch('http://localhost:8080/api/booking/6', {  //for checking hardcode value is taken
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ bookingId, updateData: 'Passengers added' }),
            });

            navigate('/success-page'); // Redirect to a success page or another component
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    };

    return (
        <div>
            {!bookingId ? (
                <Button onClick={handleCreateBooking}>Create Booking</Button>
            ) : (
                <div>
                    <Form.Group>
                        <Form.Label>Passenger Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={passengerName} 
                            onChange={(e) => setPassengerName(e.target.value)} 
                        />
                        <Button onClick={handleAddPassenger}>Add Passenger</Button>
                    </Form.Group>

                    <ul>
                        {passengers.map((passenger, index) => (
                            <li key={index}>{passenger}</li>
                        ))}
                    </ul>

                    <Button onClick={handleDone}>Done</Button>
                </div>
            )}
        </div>
    );
};

export default BookingPage;
