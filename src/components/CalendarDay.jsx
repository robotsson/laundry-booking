import './CalendarDay.css';
import { Link } from "react-router-dom";
import { useBooking } from './BookingContext';
// import { supabase } from '../utils/supabase';
import dayjs from 'dayjs';

export default function CalendarDay( {date} ) {
 
    const { setSelectedDate } = useBooking();    

    function dayClickHandler()
    {
        // console.log("clickHandler: "+currentDate+" "+selectedDate);
        setSelectedDate(date);         
    }
    
    let className="calendar-day";

    if( dayjs().isAfter( date, 'day') )
    {
      className +=" calendar-day-disabled";
    }

    return (
        <div className="calendar-day-container">
          <Link className="calendar-link" to="/day/">
            <div className={className} onClick={dayClickHandler}>{date}</div>
          </Link>
        </div>
    );

}

