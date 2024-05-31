import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Rooms } from './pages/Rooms';
import { Room_Details } from './pages/Room_Details';
import { Bookings } from './pages/Bookings';
import { Booking_Details } from './pages/Booking_Details';
import { Users } from './pages/Users';
import { User_Details } from './pages/User_Details';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { AuthProvider } from './components/AuthContext';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ShowHideProvider } from './components/ShowHideContext';


function App() {
    
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AuthProvider>
            <ShowHideProvider>
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
            </ShowHideProvider>
          </AuthProvider>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;
