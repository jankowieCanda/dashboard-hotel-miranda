import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Room } from "../interfaces/RoomsInterfaces";
import { getRoom } from "../features/rooms/roomsSlice";
import { useEffect, useState } from "react";
import { fecthRoomThunk } from "../features/rooms/roomsThunk";


export const Room_Details = () => {

    const dispatch = useAppDispatch();
    const { id } = useParams();
    const room: Room = useAppSelector(getRoom);
    const [isLoading, setIsLoading] = useState(true);

    const initialFetch = async () => {
        await dispatch(fecthRoomThunk(id!));
        setIsLoading(false);
    }
    useEffect(() => {
        initialFetch();
    }, []);

    return(
        <>{isLoading ? <p>loading...</p> :
            <p>{room.Room_Type}</p>
        }
        </>
    );
}