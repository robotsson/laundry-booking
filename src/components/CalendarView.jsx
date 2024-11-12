import './CalendarView.css';
import CalendarWeek from './CalendarWeek';



function _getDate() { 
  const months = [ "January", "February", "March", "April", "May", "June",
                       "July", "August", "September", "October", "November", "December" ];
  const days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];
                       
  let _date = new Date( Date.now() );
  return ( days[_date.getDay()]+" "+_date.getDate()+" "+
           months[_date.getMonth()]+" "+_date.getFullYear()+" "+
           _date.getHours()+":"+_date.getMonth()+":"+_date.getSeconds());
}

export default function CalendarView() {  

  const dates = [ ["Nov 11","Nov 12","Nov 13","Nov 14","Nov 15","Nov 16","Nov 17"],
                  ["Nov 18","Nov 19","Nov 20","Nov 21","Nov 22","Nov 23","Nov 24"],
                  ["Nov 25","Nov 26","Nov 27","Nov 28","Nov 29","Nov 30","Dec 1"],
                  ["Dec 2","Dec 3","Dec 4","Dec 5","Dec 6","Dec 7","Dec 8"] ];

  return (
    <div className="Calendar">
      <h1>{_getDate()}</h1>
      <div className="weeks">
        <CalendarWeek dates={dates[0]}/>
        <CalendarWeek dates={dates[1]}/>
        <CalendarWeek dates={dates[2]}/>
        <CalendarWeek dates={dates[3]}/>
      </div>
    </div>
  );
}
