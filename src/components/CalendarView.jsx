import './CalendarView.css';
import CalendarDay from './CalendarDay';
import dayjs from 'dayjs';

const _getDate = () => { 
  return dayjs().format('dddd DD MMMM YYYY H:mm:ss');
}

export default function CalendarView({bookings}) {  
  
  // console.log(`CalendarView bookings.length: ${bookings?.length}`);
  // if( bookings === null )
  // {
  //     console.log("CalenderView bookings was null");
  // }  
  // console.log(JSON.stringify(bookings));
  const days = bookings.map(
    (item, index) => <CalendarDay key={index} index={index} data={item}/>  
  );

  return (
    <div className="calendar">
      <h1>{_getDate()}</h1>
      <div>
        <div className="calendar-month">
            {days}
        </div>
      </div>
    </div>
  );

}
