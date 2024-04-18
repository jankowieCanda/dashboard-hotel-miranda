import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App.jsx';
/* import { Customer_Reviews } from './pages/Customer_Reviews.jsx'; */
import { Rooms } from './pages/Rooms.jsx';
import { Room_Details } from './pages/Room_Details.jsx';
import { Bookings } from './pages/Bookings.jsx';
import { Booking_Details } from './pages/Booking_Details.jsx';
import { Users } from './pages/Users.jsx';
import { User_Details } from './pages/User_Details.jsx';
import { Contact } from './pages/Contact.jsx';
import '../main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/bookings/:id' element={<Booking_Details />} />
        {/* <Route path='/customer-reviews' element={<Customer_Reviews />} /> */}
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/rooms/:id' element={<Room_Details />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<User_Details />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
