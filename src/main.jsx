import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App.jsx';
import './index.css';
import { Customer_Reviews } from './pages/Customer_Reviews.jsx';
import { Rooms } from './pages/Rooms.jsx';
import { Room_Details } from './pages/Room_Details.jsx';
import { Bookings } from './pages/Bookings.jsx';
import { Guests } from './pages/Guests.jsx';
import { Guest_Details } from './pages/Guest_Details.jsx';
import { Concierges } from './pages/Concierges.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/customer-reviews' element={<Customer_Reviews />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/rooms/:id' element={<Room_Details />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/guests' element={<Guests />} />
        <Route path='/guests/:id' element={<Guest_Details />} />
        <Route path='/concierges' element={<Concierges />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
