
import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings, getBooking, getError, getStatus } from "../features/bookings/bookingsSlice";
import { useEffect, useState } from "react";
import { fecthAllBookingsThunk } from "../features/bookings/bookingsThunk";


export const Bookings = (props) => {
    const dispatch = useDispatch();
    const allBookings = useSelector(getAllBookings);
    const booking = useSelector(getBooking);
    const status = useSelector(getStatus);
    const error = useSelector(getError);
    const [orderedList, SetOrderedList] = useState();
    

    const orderByDate = (array, property) => {
        let orderedByDate = [...array];
        SetOrderedList(orderedByDate.sort((a, b) => new Date(a[property]) > new Date(b[property]) ? -1 : 1));
    }

    useEffect(() => {
        dispatch(fecthAllBookingsThunk());
    }, [])
    
    const cols = [
        {property: 'Guest', display: data => data.Guest},
        {property: 'Reservation ID', display: data => data.Reservation_ID},
        {property: 'Order Date', display: data => new Date(data.Order_Date).toLocaleDateString()},
        {property: 'Check In', display: data => new Date(data.Check_In).toLocaleDateString()},
        {property: 'Check Out', display: data => new Date(data.Check_Out).toLocaleDateString()},
        {property: 'Special Request', display: () => (<button>view notes</button>)},
        {property: 'Room Type', display: data => data.Room_Type},
        {property: 'Room Number', display: data => data.Room_Number},
        {property: 'Status', display: data => data.Status}
    ];
    
    const tabs = [
        {label: 'All Bookings', action: () => orderByDate(allBookings, 'Order_Date')},
        {label: 'Checking In', action: () => orderByDate(allBookings, 'Check_In')},
        {label: 'Checking Out', action: () => orderByDate(allBookings, 'Check_Out')},
        {label: 'In Progress', action: () => orderByDate(allBookings.filter(booking => booking.Status === 'In Progress'), 'Order_Date')},
        {label: 'searchBooking', type: 'input'}
    ]; 

    return(
        <>
            <Header title={'Bookings'} />
            <SideNav />
            <Data_Table cols={cols} data={allBookings} tabs={tabs} orderedList={orderedList}/>
            
        </>
    );
}

