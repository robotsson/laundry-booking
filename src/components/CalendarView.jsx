import './CalendarView.css';
import CalendarMonth from './CalendarMonth';
import { supabase } from '../utils/supabase';
import { useEffect, useState } from 'react';

const dayjs = require('dayjs');


const _getDate = () => { 
  let _now = dayjs();
  return _now.format('dddd DD MMMM YYYY H:mm:ss');
}

export default function CalendarView({bookings}) {  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {    
    const fetchAvailableSlots = async () => {
      
      try {
        // Fetch room schedule data with relationships to Dates and Rooms tables
        const { data, error } = await supabase        
        .from('Room_Schedule')
        .select(`
          time_block,
          owner,
          Rooms!inner(room_name),
          Dates!inner(date)
          `)
        .eq('Dates.date', '2024-11-09') //Filter by day
        .in('Rooms.room_name', ['room1', 'room2']); //All rooms        
      
      if(error) {
        console.error(error);
        throw error;
      }
      console.log(data);
      

      } catch(err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailableSlots();
  }, []); // Re-run whenever timeBlock or date changes


 // console.log(`CalendarView bookings.length: ${bookings?.length}`);

  if( bookings === null )
  {
      console.log("CalenderView bookings was null");
  }
  

  if (loading) return <p>Loading available slots...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>; 
  // console.log(JSON.stringify(bookings));

  return (
    <div className="calendar">
      <h1>{_getDate()}</h1>
      <div>
        <CalendarMonth bookings={bookings} />
      </div>
    </div>
  );

}
