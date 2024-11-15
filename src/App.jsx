import React from 'react';
import { BookingProvider } from './components/BookingContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalendarView from './components/CalendarView';
import DayView from './components/DayView';
import LogIn from './components/LogIn';


function App() {
  return (
    <BookingProvider>
      <Router>
        <Routes>
          {/* Uncoment the rout corresponding to your part of the project. */}        
          {/* <Route path="/" element={<CalendarView bookings={data} />} />  */}
          <Route path="/" element={<DayView />}  /> 
          {/* <Route path="/login" element={<LogIn />} />  */}
        </Routes>
      </Router>      
    </BookingProvider>       
  );
}

export default App;
