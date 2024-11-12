import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalendarView from './components/CalendarView';
import DayView from './components/DayView';
import LogIn from './components/LogIn';


function App() {
  return (
    <BrowserRouter>      
      <Routes>
        {/* Uncoment the rout corresponding to your part of the project. */}        
        <Route path="/" element={<CalendarView />} /> 
        {/* <Route path="/" element={<DayView/>} /> */}
        {/* <Route path="/" element={<LogIn/>} /> */}
      </Routes>
    </BrowserRouter>       
  );
}

export default App;
