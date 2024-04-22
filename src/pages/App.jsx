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
import { AuthProvider } from '../components/AuthContext.jsx';
/* import { useState } from 'react';
import { LOCAL_AUTH } from '../var.js'; */


function App() {
  /* const [auth, setAuth] = useState(localStorage.getItem(LOCAL_AUTH) !== null);

  console.log(auth)

  if(auth) {
    localStorage.setItem(LOCAL_AUTH, true);
  }
 */
  return (
    <>
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          
            <Route path='/login' element={<Login /* auth={auth} setAuth={setAuth} */ />} />
            <Route path='/' element={<Dashboard /*  setAuth={setAuth} */ />} />
            <Route path='/bookings' element={<Bookings />} />
            <Route path='/bookings/:id' element={<Booking_Details />} />
            <Route path='/rooms' element={<Rooms />} />
            <Route path='/rooms/:id' element={<Room_Details />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/users' element={<Users />} />
            <Route path='/users/:id' element={<User_Details />} />
          
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
