import './CalendarDay.css';
import { Link } from "react-router-dom";
import { useBooking } from './BookingContext';
// import { supabase } from '../utils/supabase';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export default function CalendarDay( {data} ) {
 
    const { selectedDate, setSelectedDate } = useBooking();
    
    const currentDate = data['date'];

    // useEffect(() => {
    //   console.log(`useEffect ${selectedDate}`);
    // }, [selectedDate] );

    function dayClickHandler()
    {
        console.log("clickHandler: "+currentDate+" "+selectedDate);
        setSelectedDate(currentDate); 
            
    }
    
    let className="calendar-day";

    if( dayjs().isAfter(data['date'], 'day') )
    {
      className +=" calendar-day-disabled";
    }

    return (
        <div className="calendar-day-container">
          <Link className="calendar-link" to="/day/">
            <div className={className} onClick={dayClickHandler}>{currentDate}</div>
          </Link>
        </div>
    );

    return (
      <div className="calendar-day-container">
       
          <div className={className} onClick={dayClickHandler}>{currentDate}</div>

      </div>
  );    
}

