import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import { useBooking } from './BookingContext';
import UserLogin from './LogIn';
import './DayView.css';
import dayjs from 'dayjs';

function DayView () {
  const { selectedDate, setSelectedDate, setSelectedRoom, setSelectedTimeBlock, 
          bookingChangedFlag } = useBooking();    
  const [data, setData] = useState([]);
  const [showLogin, setShowLogin] = useState(false); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleTimeBlockClick = (e, room, timeBlock) => {     
    const buttonClass = e.target.className; // Get the className of the button

    // if(buttonClass.includes('available')) {      
    setSelectedRoom(room);
    setSelectedTimeBlock(timeBlock);
    setShowLogin(true);
    //}    
  };

  const closeModal = () => {
    setShowLogin(false);
  };

  useEffect(() => {    
    const fetchBookedSlots = async () => {
      
      // console.log("DayView useEffect");

      try {
        setLoading(true);

        const { data, error } = await supabase        
        .from('booking')
        .select(`
          date,
          timeslot,
          room, 
          user_id
          `)
        .eq('date', selectedDate?selectedDate:dayjs().format("YYYY-MM-DD")); 

        setData(data);
        // console.log(data);
      
        if(error) {
          console.error(error);
          throw error;
        }           


      } catch(err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookedSlots();
  }, [ bookingChangedFlag, selectedDate ]);   
   
  
  if (loading) return; //  <p>Loading available slots...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>; 

  const displayDate = dayjs(selectedDate).format('dddd DD MMMM YYYY');
 
  const room_slots = [ { "08-12": null, "12-16": null, "16-19": null, "19-22": null } ,
                       { "08-12": null, "12-16": null, "16-19": null, "19-22": null } ];

  data.forEach( row => {
      room_slots[row.room-1][row.timeslot] = row.user_id;
  });

  // console.table(room_slots);

  // Object.keys(room_slots[0]).map((slot, index) => { console.log( slot + room_slots[0][slot]) });

  return (    
    <div className='dayView'>
      <h1>{displayDate}</h1><p></p>
      <div className="day"> 

        <div className="room" key="r1">
          <h3>Laundry Room 1</h3>
          <div> 
            { Object.keys(room_slots[0]).map((slot, index) => (
              <div key={index} className="time-slot">
                <span>{slot}</span>
                <button onClick={(e) => handleTimeBlockClick(e, 1, slot)}
                  className={ room_slots[0][slot] ? 'booked' : 'available' } >
                  { room_slots[0][slot] ? room_slots[0][slot] : 'Book' }
                </button> 
              </div>
            ))}           
          </div>
        </div>

        <div className="room" key="r2">
          <h3>Laundry Room 2</h3>
          <div> 
            { Object.keys(room_slots[1]).map((slot, index) => (
              <div key={index} className="time-slot">
                <span>{slot}</span>
                <button onClick={(e) => handleTimeBlockClick(e, 2, slot)}
                  className={ room_slots[1][slot] ? 'booked' : 'available' } >
                  { room_slots[1][slot] ? room_slots[1][slot] : 'Book' }
                </button> 
              </div>
            ))}           
          </div>
        </div>

      </div>
      {showLogin && <UserLogin onClose={closeModal} />}
      <p></p>
      <a href="/"><button className="back">Back to Calendar</button></a>
      <p></p>
    </div>
  );
};
 
export default DayView;