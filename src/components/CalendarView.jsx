import './CalendarView.css';
import CalendarDay from './CalendarDay';
import dayjs from 'dayjs';
import 'dayjs/locale/sv';
import weekday from 'dayjs/plugin/weekday';

export default function CalendarView({bookings}) {  

  const getDate = () => dayjs().format('dddd DD MMMM YYYY H:mm:ss');

  dayjs.extend(weekday);
  console.log( dayjs().format('YYYY-MM-DD') );
 
  console.log( dayjs().locale('sv').weekday() );

  const startDate = dayjs().locale('sv').startOf('week');
  console.log( startDate );
  
  const days = [];
  for( let index = 0; index < 28; index++ )
  {
    const date = startDate.add( index, 'day' ).format('YYYY-MM-DD');
    days.push( <CalendarDay key={index} date={date}/> );
  }

  return (
    <div className="calendar">
      <h1>{getDate()}</h1>
      <div>
        <div className="calendar-month">
          {days}
        </div>
      </div>
    </div>
  );

}
