import './CalendarDay.css';
import { Link } from "react-router-dom";

export default function CalendarDay( {data,index} ) {
    
    function dayClickHandler()
    {
        console.log("clickHandler: "+data['date']);
    }

    // console.log(`date: ${date}`);
    const disabled = "not-disabled"; // check if date has passed
    
    const url = `/day/${data['date']}`;   // DayView gets this in useParams().id

    return (
        <div className="hej">
          <Link to={url}>
            <div className="calendar-day" onClick={dayClickHandler}>{data['date']}</div>
          </Link>
        </div>
    );
}

