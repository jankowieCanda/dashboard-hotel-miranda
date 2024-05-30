import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getUser } from "../features/users/usersSlice";
import { User } from "../interfaces/UsersInterfaces";
import { useEffect, useState } from "react";
import { fecthUserThunk } from "../features/users/usersThunk";


export const User_Details = () => {

    const dispatch = useAppDispatch();
    const { id } = useParams();
    const user: User = useAppSelector(getUser);
    const [isLoading, setIsLoading] = useState(true);

    const initialFetch = async () => {
        await dispatch(fecthUserThunk(id!));
        setIsLoading(false);
    }
    useEffect(() => {
        initialFetch();
    }, []);

    return(
        <>{isLoading ? <p>loading...</p> :
            <p>{user.Full_Name}</p>
        }
        </>
    );
}