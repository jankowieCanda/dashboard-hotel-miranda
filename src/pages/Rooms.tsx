import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { fecthAllRoomsThunk } from "../features/rooms/roomsThunk";
import { getAllRooms } from "../features/rooms/roomsSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Room } from "../interfaces/RoomsInterfaces";
import { Cols } from "../interfaces/ColsInterface";

export const Rooms = () => {
    const dispatch = useAppDispatch();
    const allRooms: Room[] = useAppSelector(getAllRooms);
    const [isLoading, setIsLoading] = useState(true);

    const initialFetch = async () => {
        await dispatch(fecthAllRoomsThunk());
        setIsLoading(false);
    }

    useEffect(() => {
        initialFetch();
    }, [])
    
        
    const cols: Cols[] = [
        {property: '', display: (data: Room) => <img src={data.Picture} alt="picture" style={{width: "50px", height: "50px"}}/>},
        {property: 'Room Number', display: (data: Room) => data.Room_Number},
        {property: 'Room ID', display: (data: Room) => data.Room_ID},
        {property: 'Room Type', display: (data: Room) => data.Room_Type},
        {property: 'Amenities', display: (data: Room) => data.Amenities},
        {property: 'Price', display: (data: Room) => data.Price},
        {property: 'Offer Price', display: (data: Room) => data.Offer_Price},
        {property: 'Status', display: (data: Room) => data.Status}
    ];
      
    return(
        <>
            {isLoading ? <p>loading...</p> :
                <>
                    <Header title={'Rooms'} />
                    <Data_Table cols={cols} data={allRooms}/>
                    <SideNav />
                </>
            }
        </>
    );
}