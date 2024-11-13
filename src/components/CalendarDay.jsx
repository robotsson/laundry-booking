import './CalendarDay.css';
import { Link } from "react-router-dom";

export default function CalendarDay( {data,index} ) {
    
    function dayClickHandler()
    {
        console.log("clickHandler: "+data['date']);
    }

    // console.log(`date: ${date}`);
    const className = "day item"+index;
    const url = `/day/${data['date']}`;   // DayView gets this in useParams().id

    return (
        <Link to={url}>
          <div className={className} onClick={dayClickHandler}>{data['date']}</div>
        </Link>
    );
}

