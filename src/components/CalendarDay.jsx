import './CalendarDay.css';
import { Link } from "react-router-dom";
import { useBooking } from './BookingContext';
import { supabase } from '../utils/supabase';
import { useEffect, useState } from 'react';

const dayjs = require('dayjs');

export default function CalendarDay( {data, index} ) {
 
    const { selectedDate, setSelectedDate } = useBooking();
    const currentDate = data['date'];

    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);
  
    // useEffect(() => {    
    //   const fetchAvailableSlots = async () => {
        
    //     try {
    //       // Fetch room schedule data with relationships to Dates and Rooms tables
    //       const { data, error } = await supabase        
    //       .from('Room_Schedule')
    //       .select(`
    //         time_block,
    //         owner,
    //         Rooms!inner(room_name),
    //         Dates!inner(date)
    //         `)
    //       .eq('Dates.date', '2024-11-10') //Filter by day
    //       .in('Rooms.room_name', ['room1', 'room2']); //All rooms        
        
    //     if(error) {
    //       console.error(error);
    //       throw error;
    //     }
    //     console.log(data);
        
  
    //     } catch(err) {
    //       setError(err.message);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
  
    //   fetchAvailableSlots();
    // }, []); // Re-run whenever timeBlock or date changes
  
    // if (loading) return <p>Loading available slots...</p>;
    // if (error) return <p style={{ color: 'red' }}>{error}</p>;   


    
    function dayClickHandler()
    {
        console.log("clickHandler: "+currentDate);
        setSelectedDate(currentDate);
        console.log(`CalendarDay selectedDate: ${selectedDate}`);
    }
    
    let className="calendar-day";

    if( dayjs().isAfter(data['date'], 'day') )
    {
      className +=" calendar-day-disabled";
    }



    return (
        <div className="calendar-day-container">
          <Link className="calendar-link" to="/day/">
            <div className={className} onClick={dayClickHandler}>{data['date']}</div>
          </Link>
        </div>
    );
}

