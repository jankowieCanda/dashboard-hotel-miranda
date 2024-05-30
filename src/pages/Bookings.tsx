
import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { getAllBookings } from "../features/bookings/bookingsSlice";
import { useEffect, useState } from "react";
import { fecthAllBookingsThunk } from "../features/bookings/bookingsThunk";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Booking } from "../interfaces/BookingsInterfaces";
import { Tabs } from "../interfaces/TabsInterface";
import { Cols } from "../interfaces/ColsInterface";


export const Bookings = () => {
    const dispatch = useAppDispatch();
    const allBookings: Booking[] = useAppSelector(getAllBookings);
    const [orderedList, SetOrderedList] = useState<Booking[]>([]);

    useEffect(() => {
        dispatch(fecthAllBookingsThunk());
    }, []);

    const orderByDate = (array: Array<Booking>, property: keyof(Booking)) => {
        let orderedByDate = [...array];
        SetOrderedList(orderedByDate.sort((a, b) => a[property] > b[property] ? -1 : 1));
    }
    
    const cols: Cols[] = [
        {property: 'Guest', display: (data: Booking) => data.Guest},
        {property: 'Reservation ID', display: (data: Booking) => data.Reservation_ID},
        {property: 'Order Date', display: (data: Booking) => data.Order_Date},
        {property: 'Check In', display: (data: Booking) => data.Check_In},
        {property: 'Check Out', display: (data: Booking) => data.Check_Out},
        {property: 'Special Request', display: () => (<button>view notes</button>)},
        {property: 'Room Type', display: (data: Booking) => data.Room_Type},
        {property: 'Room Number', display: (data: Booking) => data.Room_Number},
        {property: 'Status', display: (data: Booking) => data.Status}
    ];
    
    const tabs: Tabs[] = [
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

