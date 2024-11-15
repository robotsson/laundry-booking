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
    
    let dayClassName="calendar-day";
    let containerClassName="calendar-day-container";

    if( dayjs().isAfter( date, 'day') )
    {
        dayClassName = "calendar-day-disabled";  
        containerClassName = "calendar-day-container-disabled";
    }

    return (
        <div className={containerClassName}>
          <Link className="calendar-link" to="/day/">
            <div className={dayClassName} onClick={dayClickHandler}>
              {date}
            </div>
          </Link>
        </div>
    );
      
};

