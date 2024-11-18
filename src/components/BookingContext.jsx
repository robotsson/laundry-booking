import React, { createContext, useState, useContext } from 'react';
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

  // Function to update booking information in the database
  const bookTimeSlot = async () => {
    console.log(selectedDate, selectedRoom, selectedTimeBlock, selectedOwner);
    
    if (!selectedDate || !selectedRoom || !selectedTimeBlock || !selectedOwner) {
      console.error("Missing required booking information");
      return;
    }
    
    try {
      // Insert the date and get the inserted date ID
      const { data: dateData, error: dateError } = await supabase
      .from('Dates')
      .insert([{ date: selectedDate }])
      .select('id')
      .single();
    
      if (dateError) throw dateError;

      const dateId = dateData.id;

      // Inser the room and get the inserted room ID
      const { data: roomData, error: roomError } = await supabase
      .from('Rooms')
      .insert([{ room_name: selectedRoom }])
      .select('id')
      .single();

      if (roomError) throw roomError;

      const roomId = roomData.id;
      
      // Insert into Room_Schedule with the obtained IDs
      const { data: scheduleData, error: scheduleError } = await supabase
      .from('Room_Schedule')
      .insert([
        {
          date_id: dateId,
          room_id: roomId,
          time_block: selectedTimeBlock,
          owner: selectedOwner, // Assuming 'owner' is the selected apartment
        },
      ])
      .select();

      if (scheduleError) throw scheduleError;

      console.log("Booking successful:", scheduleData);

    } catch (error) {
      console.error("Booking failed", error);
    }
  };

  // Function to cancel booked information in the database
  // const cancelTimeSlot = async () => {
  //   try {
  //     // Perform cancellation logic here
  //     console.log(`Canceling booking for ${room} at ${timeBlock}`);
  //     // Example: update Supabase to remove the owner
  //     const { error } = await supabase
  //       .from('Room_Schedule')
  //       .update({ owner: null })
  //       .match({ 'Rooms.room_name': room, time_block: timeBlock });
  
  //     if (error) throw error;
  
  //     // Refresh the state
  //     setSlots((prev) => {
  //       const updated = { ...prev };
  //       const roomSlots = updated[room];
  //       const slot = roomSlots.find((s) => s.time_block === timeBlock);
  //       if (slot) slot.owner = null;
  //       return updated;
  //     });
  //   } catch (err) {
  //     console.error('Error canceling booking:', err.message);
  //     setError('Failed to cancel booking.');
  //   }
  // };

  return (
    <BookingContext.Provider
      value={{
<<<<<<< HEAD
        selectedDate,
=======
        selectedDate: '2024-11-11',        
>>>>>>> db-authentication
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
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

// Hook to access the BookingContext
export const useBooking = () => useContext(BookingContext);
