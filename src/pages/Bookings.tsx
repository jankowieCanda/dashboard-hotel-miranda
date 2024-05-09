
import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { getAllBookings } from "../features/bookings/bookingsSlice";
import { useEffect, useState } from "react";
import { fecthAllBookingsThunk } from "../features/bookings/bookingsThunk";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Booking } from "../interfaces/BookingsInterfaces";


export const Bookings = () => {
    const dispatch = useAppDispatch();
    const allBookings: Booking[] = useAppSelector(getAllBookings);
    const [orderedList, SetOrderedList] = useState<Booking[]>();
    

    const orderByDate = (array: Array<Booking>, property: keyof(Booking)) => {
        let orderedByDate = [...array];
        SetOrderedList(orderedByDate.sort((a, b) => new Date(a[property]) > new Date(b[property]) ? -1 : 1));
    }

    useEffect(() => {
        dispatch(fecthAllBookingsThunk());
    }, [])
    
    const cols: Object[] = [
        {property: 'Guest', display: (data: Booking) => data.Guest},
        {property: 'Reservation ID', display: (data: Booking) => data.Reservation_ID},
        {property: 'Order Date', display: (data: Booking) => new Date(data.Order_Date).toLocaleDateString()},
        {property: 'Check In', display: (data: Booking) => new Date(data.Check_In).toLocaleDateString()},
        {property: 'Check Out', display: (data: Booking) => new Date(data.Check_Out).toLocaleDateString()},
        {property: 'Special Request', display: () => (<button>view notes</button>)},
        {property: 'Room Type', display: (data: Booking) => data.Room_Type},
        {property: 'Room Number', display: (data: Booking) => data.Room_Number},
        {property: 'Status', display: (data: Booking) => data.Status}
    ];
    
    const tabs: Object[] = [
        {label: 'All Bookings', action: () => orderByDate(allBookings, 'Order_Date')},
        {label: 'Checking In', action: () => orderByDate(allBookings, 'Check_In')},
        {label: 'Checking Out', action: () => orderByDate(allBookings, 'Check_Out')},
        {label: 'In Progress', action: () => orderByDate(allBookings.filter((booking: Booking) => booking.Status === 'In Progress'), 'Order_Date')},
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

