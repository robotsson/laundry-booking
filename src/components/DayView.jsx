import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

function DayView({bookings}) {

  const date = useParams().date;

function DayView () { /*state variables*/
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [apartmentNumber, setApartmentNumber] = useState();
  const [availableSlots, setAvailableSlots] = useState({
    'Laundry Room 1': ['08-12', '12-16', '16-19', '19-22'],
    'Laundry Room 2': ['08-12', '12-16', '16-19', '19-22'],
  });
      /* Function to handle date selection*/
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
            /* Function to handle Bookingn*/
 
  const handleBook = (room, time) => {
    if (!isLoggedIn) {                 /*if not logged in, show the login prompt*/
      // Show login prompt
      alert('Please log in to confirm booking.');
    } else {        /*Confirm the booking*/
      alert(`Booking confirmed for ${apartmentNumber} at ${room} for ${time} on ${selectedDate}`);    }
  };
      /* Function to handle user login*/
  const handleLogin = () => {
    setIsLoggedIn(true);     /*set the user as logged in */
    setShowLogin(false);     /* Hide the login prompt*/
    alert('Logged in! Booking confirmed.');     /*Confirm login*/
  };
       /*Function to handle booking cancellation*/
  const handleCancelBooking = () => {
    const confirmCancel = window.confirm('Do you want to cancel your booking?');
    if (confirmCancel) {
      alert('Booking cancelled.');  /*Notify cancellation*/
    }
  };
 
  return (
    <div>
      <div className="day">
                  {/* Map to display each luandry room*/}  
                {Object.keys(availableSlots).map((room) => (
                    <div className="room" key={room}>
                        <h3>{room}</h3>   {/*Display the room name*/}
                        <div>
                             {/*Map for time slots for each room*/}
                            {availableSlots[room].map((slot) => (    
                                <div key={slot}>
                                    {slot}    {/*Display the time slot*/}
                                     <button onClick={() => handleBook(room, slot)}>Book</button>  {/* Booking button*/}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/*Login prompt*/}
            {showLogin && (
                <div className="login">
                    <h3>Login</h3>
                    <input
                        type="text"      
                        placeholder="Enter Apartment Number"
                        value={apartmentNumber}
                        onChange={(e) =>        
                        setApartmentNumber(e.target.value)}   // Update apartment number
 
                    />  
                    <button onClick={handleLogin}>Login to confirm booking</button>  {/*Login button*/}
                </div>
            )}
              {/*Display apartment number if logged in*/}
            {isLoggedIn && (
                <div className="apartment-number">
                    <h3>Your Apartment Number: <button onClick={handleCancelBooking}>{apartmentNumber}</button></h3>
                </div>
            )}
        </div>
    );
};
 
export default DayView;
