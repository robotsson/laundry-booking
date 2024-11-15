import React from 'react';
import { BookingProvider } from './components/BookingContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalendarView from './components/CalendarView';
import DayView from './components/DayView';
import LogIn from './components/LogIn';

function App() {

  return (
    <BookingProvider>
      <Router future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        <Routes> 
          {/* change this to have a different start page */}
          <Route path="/" element={<DayView />} />

          <Route path="/calendar" element={<CalendarView />} /> 
          <Route path="/day" element={<DayView />}  /> 
          <Route path="/login" element={<LogIn />} />  
        </Routes>
      </Router>      
    </BookingProvider>       
  );
}

export default App;
