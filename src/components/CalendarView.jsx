import './CalendarView.css';
import CalendarDay from './CalendarDay';
import dayjs from 'dayjs';
import 'dayjs/locale/sv';
import weekday from 'dayjs/plugin/weekday';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';

export default function CalendarView() {  

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
        .gte('Dates.date', '2024-11-10') // Start date
        .lte('Dates.date', '2024-11-17') // End date //Filter by day
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
  }, []); 

  if (loading) return <p>Loading ...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;   

  const getDate = () => dayjs().format('dddd DD MMMM YYYY H:mm');

  dayjs.extend(weekday);
  // console.log( dayjs().format('YYYY-MM-DD') );
  // console.log( dayjs().locale('sv').weekday() );
  const startDate = dayjs().locale('sv').startOf('week');
  // console.log( startDate );
  
  const days = [];
  for( let index = 0; index < 28; index++ )
  {
    const date = startDate.add( index, 'day' ).format('YYYY-MM-DD');
    days.push( <CalendarDay key={index} date={date}/> );
  }

  return (
    <div className="calendar">
      <h1>{getDate()}</h1>
      <div>
        <div className="calendar-weekdays">
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
          <div>Sunday</div>                    
        </div>
        <div className="calendar-month">
          {days}
        </div>
      </div>
    </div>
  );

}
