import './CalendarDay.css';
import { Link } from "react-router-dom";

const dayjs = require('dayjs');

export default function CalendarDay( {data,index} ) {
    
    function dayClickHandler()
    {
        console.log("clickHandler: "+data['date']);
    }

    let className="calendar-day";
    
    const url = `/day/${data['date']}`;   // DayView gets this in useParams().id

    if( dayjs().isAfter(data['date'], 'day') )
    {
      className +=" calendar-day-disabled";
    }

    return (
        <div className="calendar-day-container">
          <Link className="calendar" to={url}>
            <div className={className} onClick={dayClickHandler}>{data['date']}</div>
          </Link>
        </div>
    );
}

