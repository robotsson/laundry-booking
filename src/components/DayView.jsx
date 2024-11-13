import React from 'react';
import { useParams } from 'react-router-dom';

function DayView({bookings}) {

  const date = useParams().date;

  return (
    <div>     
      <h1>This is the Day View</h1>
      <h2>It was navigated to with the param {date}</h2>
      <h3>Are there better ways to do this? useContext?</h3>
    </div>
  );
}

export default DayView;
