
import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings, getBooking, getError, getStatus } from "../features/bookings/bookingsSlice";
import { useEffect } from "react";
import { fecthAllBookingsThunk } from "../features/bookings/bookingsThunk";


export const Bookings = (props) => {
    const dispatch = useDispatch();
    const allBookings = useSelector(getAllBookings);
    const booking = useSelector(getBooking);
    const status = useSelector(getStatus);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fecthAllBookingsThunk());
    }, [])
    
    const cols = [
        {property: 'Guest', display: data => data.Guest},
        {property: 'Reservation ID', display: data => data.Reservation_ID},
        {property: 'Order Date', display: data => data.Order_Date},
        {property: 'Check In', display: data => data.Check_In},
        {property: 'Check Out', display: data => data.Check_Out},
        {property: 'Special Request', display: () => (<button>view notes</button>)},
        {property: 'Room Type', display: data => data.Room_Type},
        {property: 'Room Number', display: data => data.Room_Number},
        {property: 'Status', display: data => data.Status}
    ];
    
    const tabs = [
        {label: 'All Bookings'},
        {label: 'Checking In'},
        {label: 'Checking Out'},
        {label: 'In Progress'},
        {label: 'searchBooking', type: 'input'}
    ];

    return(
        <>
            <Header title={'Bookings'} />
            <SideNav />
            <Data_Table cols={cols} data={allBookings} tabs={tabs} />
            
        </>
    );
}