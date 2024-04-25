
import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings, getBooking, getError, getStatus } from "../features/bookings/bookingsSlice";
import { useEffect } from "react";
import { fecthAllBookingsThunk, fecthBookingThunk, deleteBookingThunk, updateBookingThunk, createBookingThunk } from "../features/bookings/bookingsThunk";


export const Bookings = (props) => {
    const dispatch = useDispatch();
    const allBookings = useSelector(getAllBookings);
    const booking = useSelector(getBooking);
    const status = useSelector(getStatus);
    const error = useSelector(getError);

    useEffect(() => {
        if(status === 'pending') {
            console.log('pending');
        } else if(status === 'rejected') {
            console.log(`${status} - ${error}`);
        } else if(status === 'fulfilled') {
            console.log('fulfilled');
        } else if(status === 'idle') {
            dispatch(fecthAllBookingsThunk());
           /*  dispatch(fecthBookingThunk(15));
            dispatch(deleteBookingThunk(10));
            dispatch(updateBookingThunk({"Guest":"Micheil Bonome Homeeee","Reservation_ID":6,"Order_Date":"12/26/2023","Check_In":"11/6/2023","Check_Out":"4/1/2024","Special_Request":"amet sem fusce consequat nulla nisl nunc nisl duis bibendum","Room_Type":"Suite","Room_Number":78,"Status":"Check Out"}));
            dispatch(createBookingThunk({"Guest":"otro guest","Reservation_ID":100,"Order_Date":"04/23/2024","Check_In":"04/26/2024","Check_Out":"01/1/2025","Special_Request":"una request special","Room_Type":"Suite","Room_Number":100,"Status":"Check In"})); */
        }

    }, [dispatch, allBookings])
    
    console.log(allBookings)
    /* console.log(booking) */
    console.log(status)
    
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

    return(
        <>
            <Header title={'Bookings'} />
            <SideNav />
            <Data_Table cols={cols} data={allBookings}/>
            
        </>
    );
}