import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Rooms } from './pages/Rooms.jsx';
import { Room_Details } from './pages/Room_Details.jsx';
import { Bookings } from './pages/Bookings.jsx';
import { Booking_Details } from './pages/Booking_Details.jsx';
import { Users } from './pages/Users.jsx';
import { User_Details } from './pages/User_Details.jsx';
import { Contact } from './pages/Contact.jsx';
import { Login } from './pages/Login.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { AuthProvider } from './components/AuthContext.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.js';


function App() {
  
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Dashboard />} />
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
      </Provider>
    </>
  )
}

export default App;
