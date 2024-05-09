import { useDispatch, useSelector } from "react-redux";
import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { fecthAllRoomsThunk } from "../features/rooms/roomsThunk";
import { getAllRooms } from "../features/rooms/roomsSlice";
import { useEffect } from "react";

export const Rooms = () => {
    const dispatch = useDispatch();
    const allRooms = useSelector(getAllRooms);

    useEffect(() => {
        dispatch(fecthAllRoomsThunk());
    }, [])
    
        
    const cols = [
        {property: '', display: data => (<img src={data.Picture} alt="picture"/>)},
        {property: 'Room Number', display: data => data.Room_Number},
        {property: 'Room ID', display: data => data.Room_ID},
        {property: 'Room Type', display: data => data.Room_Type},
        {property: 'Amenities', display: data => data.Amenities},
        {property: 'Price', display: data => data.Price},
        {property: 'Offer Price', display: data => data.Offer_Price},
        {property: 'Status', display: data => data.Status}
    ];
      
    return(
        <>
            <Header title={'Rooms'} />
            <Data_Table cols={cols} data={allRooms}/>
            <SideNav />
        </>
    );
}