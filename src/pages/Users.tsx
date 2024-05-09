import { useDispatch, useSelector } from "react-redux";
import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { getAllUsers, getError, getStatus, getUser } from "../features/users/usersSlice";
import { fecthAllUsersThunk } from "../features/users/usersThunk";
import { useEffect } from "react";

export const Users = () => {
    const dispatch = useDispatch();
    const allUsers = useSelector(getAllUsers);
    const user = useSelector(getUser);
    const status = useSelector(getStatus);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fecthAllUsersThunk());
    }, [])
    
    
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

    const tabs = [
        {label: 'All Employees'},
        {label: 'Active Employee'},
        {label: 'Inactive Employee'},
        {label: 'searchBooking', type: 'input'}
    ];

    return(
        <>
            <Header title={'Users'} />
            <Data_Table cols={cols} data={allUsers} tabs={tabs} />
            <SideNav />
        </>
    );
}