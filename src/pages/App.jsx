import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Rooms } from './Rooms.jsx';
import { Room_Details } from './Room_Details.jsx';
import { Bookings } from './Bookings.jsx';
import { Booking_Details } from './Booking_Details.jsx';
import { Users } from './Users.jsx';
import { User_Details } from './User_Details.jsx';
import { Contact } from './Contact.jsx';
import { Login } from './Login.jsx';
import { Dashboard } from './Dashboard.jsx';
import { useState } from 'react';


function App() {
  const [auth, setAuth] = useState(localStorage.getItem('auth') !== null);

  console.log(auth)

  if(auth) {
    localStorage.setItem('auth', true);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login auth={auth} setAuth={setAuth} />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='/bookings/:id' element={<Booking_Details />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/rooms/:id' element={<Room_Details />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<User_Details />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
