import './CalendarDay.css';


export default function CalendarDay( {date} ) {
    
    function dayClickHandler()
    {
        console.log("clickHandler: "+date);
    }
    
    // console.log(`uid: ${uid}`);
    // console.log(`date: ${date}`);
    
    return (
        <div className="day" onClick={dayClickHandler}>{date}</div>
    );
}

