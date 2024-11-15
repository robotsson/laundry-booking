import './CalendarView.css';
import CalendarDay from './CalendarDay';
import dayjs from 'dayjs';
import 'dayjs/locale/sv';
import weekday from 'dayjs/plugin/weekday';


const _getDate = () => dayjs().format('dddd DD MMMM YYYY H:mm:ss');

export default function CalendarView({bookings}) {  

  dayjs.extend(weekday);
  console.log( dayjs().format("YYYY-MM-DD") );
 
  console.log( dayjs().locale('sv').weekday() );
 
 // console.log( dayjs().subtract(dayjs().day(),'day').format("YYYY-MM-DD"));
  
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
