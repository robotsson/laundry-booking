import './CalendarView.css';
import CalendarMonth from './CalendarMonth';

const dayjs = require('dayjs');


function _getDate() { 
  let _now = dayjs();
  return _now.format('dddd DD MMMM YYYY H:mm:ss');
}

export default function CalendarView({bookings}) {  



  // const datesflat = dates.flat();

  console.log("CalendarView " + bookings?.length);

  if( bookings === null )
  {
      console.log("CalenderView bookings was null");
  }

  // for( let day of bookings )
  // {
  //     console.log(day['date']);
  // }
  
  //console.log("CalendarView " + bookings.length);
  //console.log(JSON.stringify(bookings));

  return (
    <div className="calendar">
      <h1>{_getDate()}</h1>
      <div>
        <CalendarMonth bookings={bookings} />
      </div>
    </div>
  );

  // return (
  //   <div className="calendar">
  //     <h1>{_getDate()}</h1>
  //     <div className="weeks">
  //       <CalendarWeek dates={dates[0]}/>
  //       <CalendarWeek dates={dates[1]}/>
  //       <CalendarWeek dates={dates[2]}/>
  //       <CalendarWeek dates={dates[3]}/> 
  //     </div>
  //   </div>
  // );
}
