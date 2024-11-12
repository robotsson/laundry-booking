import './CalendarWeek.css';
import CalendarDay from './CalendarDay';
import { useId } from 'react';

export default function CalendarWeek({dates}) {

    const id = useId();
    console.log(`CalendarWeek, id: ${id}`);

    // unique key property required by react for list items
    const uidStr = (dates[0]+"-"+dates[6]).replaceAll(" ","-");

    const days = dates.map(
        (date, index) => <CalendarDay key={index+"-"+uidStr} date={date}/>  
    );

    return (
        <div className="week">
            {days}
        </div>
    );
}

