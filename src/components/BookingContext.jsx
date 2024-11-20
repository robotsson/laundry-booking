import { createContext, useState, useContext } from 'react';
import { supabase } from '../utils/supabase';

const BookingContext = createContext();

// Create the provider component
export const BookingProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedTimeBlock, setSelectedTimeBlock] = useState(null);
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [availability, setAvailability] = useState({});  
  const [user, setUser] = useState(null);
  const [bookingChangedFlag, setBookingChangedFlag] = useState(false);

  // Function to update booking information in the database
  const bookTimeSlot = async (owner) => {
    if (!selectedDate || !selectedRoom || !selectedTimeBlock || !owner) {
      console.error("Missing required booking information");
      return;
    }
    
    try {
      // Insert the date and get the inserted date ID
      const { data, error } = await supabase
      .from('booking')
      .insert({date: selectedDate, room: selectedRoom, timeslot: selectedTimeBlock, user_id: owner})
      .select('id')
      .single();
    
      // if (dateError) throw dateError;

      // const dateId = dateData.id;

      if (error) {
        console.error("Error booking slot: ", error);
      } else {
        console.log("Booking successful:", data);
        setBookingChangedFlag(!bookingChangedFlag);
      }
    } catch (err) {
      console.error("Booking failed", err);
    }
  };



  return (
    <BookingContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedRoom,
        setSelectedRoom,
        selectedTimeBlock,
        setSelectedTimeBlock,
        availability,
        setAvailability,
        selectedOwner, 
        setSelectedOwner,
        user,
        setUser,
        bookTimeSlot,
        bookingChangedFlag,
        setBookingChangedFlag
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

// Hook to access the BookingContext
export const useBooking = () => useContext(BookingContext);
