import { useDispatch, useSelector } from "react-redux";
import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { getAllUsers, getError, getStatus, getUser } from "../features/users/usersSlice";
import { createUserThunk, deleteUserThunk, fecthAllUsersThunk, fecthUserThunk, updateUserThunk } from "../features/users/usersThunk";
import { useEffect } from "react";

export const Users = () => {
    const dispatch = useDispatch();
    const allUsers = useSelector(getAllUsers);
    const user = useSelector(getUser);
    const status = useSelector(getStatus);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fecthAllUsersThunk());
        /* dispatch(fecthUserThunk('61-8261714'));
        dispatch(deleteUserThunk('59-9339127'));
        dispatch(updateUserThunk({"Picture":"https://robohash.org/mollitiaquiaerror.png?size=50x50&set=set1","Full_Name":"Arlette Kittow","Employee_ID":"86-9518505","Email":"akittow4@comsenz.com","Start_Date":"3/5/2024","Description":"prueba de update","Contact":"229-748-7918","Status":"Soooooooo Inactive"}));
        dispatch(createUserThunk({"Picture":"https://robohash.org/mollitiaquiaerror.png?size=50x50&set=set1","Full_Name":"un Nombre","Employee_ID":"un ID","Email":"un email","Start_Date":"una fecha de comienzo","Description":"prueba de create","Contact":"un telefono","Status":"un estado"})); */
    }, [dispatch])
    
    /* console.log(allUsers)
    console.log(user)
    console.log(status) */
    
    
    const cols = [
        {property: '', display: data => (<img src={data.Picture} alt="picture"/>)},
        {property: 'Full Name', display: data => data.Full_Name},
        {property: 'Employee ID', display: data => data.Employee_ID},
        {property: 'Email', display: data => data.Email},
        {property: 'Start Date', display: data => data.Start_Date},
        {property: 'Description', display: data => data.Description},
        {property: 'Contact', display: data => data.Contact},
        {property: 'Status', display: data => data.Status}
    ];

    return(
        <>
            <Header title={'Users'} />
            <Data_Table cols={cols} data={allUsers}/>
            <SideNav />
        </>
    );
}