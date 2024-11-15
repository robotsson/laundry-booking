import './CalendarMonth.css';
import CalendarDay from './CalendarDay';

import dayjs from 'dayjs';

export default function CalendarMonth({bookings}) {

        

    const days = bookings.map(
        (item, index) => <CalendarDay key={index} index={index} data={item}/>  
    );

    return (
        <div className="calendar-month">
            {days}
        </div>
    );
}

