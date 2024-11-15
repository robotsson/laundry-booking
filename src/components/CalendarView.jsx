import './CalendarView.css';
import CalendarMonth from './CalendarMonth';
import dayjs from 'dayjs';

const _getDate = () => { 
  let _now = dayjs();
  return _now.format('dddd DD MMMM YYYY H:mm:ss');
}

export default function CalendarView({bookings}) {  
  
  // console.log(`CalendarView bookings.length: ${bookings?.length}`);
  // if( bookings === null )
  // {
  //     console.log("CalenderView bookings was null");
  // }  
  // console.log(JSON.stringify(bookings));

  return (
    <div className="calendar">
      <h1>{_getDate()}</h1>
      <div>
        <CalendarMonth bookings={bookings} />
      </div>
    </div>
  );

}
