import { useDispatch, useSelector } from "react-redux";
import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { createRoomThunk, deleteRoomThunk, fecthAllRoomsThunk, fecthRoomThunk, updateRoomThunk } from "../features/rooms/roomsThunk";
import { getAllRooms, getError, getRoom, getStatus } from "../features/rooms/roomsSlice";
import { useEffect } from "react";

export const Rooms = (props) => {
    const dispatch = useDispatch();
    const allRooms = useSelector(getAllRooms);
    const room = useSelector(getRoom);
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
            dispatch(fecthAllRoomsThunk());
            /* dispatch(fecthRoomThunk(15));
            dispatch(deleteRoomThunk(10));
            dispatch(updateRoomThunk({"Picture":"https://robohash.org/etomnissed.png?size=50x50&set=set1","Room_Number":10,"Room_ID":11,"Room_Type":"Suite","Amenities":"TV, airconditioner, frigde, kitchen","Price":636,"Offer_Price":178,"Status":"Available"}));
            dispatch(createRoomThunk({"Picture":"https://robohash.org/etomnissed.png?size=50x50&set=set1","Room_Number":42,"Room_ID":101,"Room_Type":"Single","Amenities":"TV","Price":636,"Offer_Price":178,"Status":"Available"})); */
        }

    }, [dispatch, allRooms])
    
    /* console.log(allRooms)
    console.log(room)
    console.log(status) */
    
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