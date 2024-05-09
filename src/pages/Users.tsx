import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { getAllUsers } from "../features/users/usersSlice";
import { fecthAllUsersThunk } from "../features/users/usersThunk";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { User } from "../interfaces/UsersInterfaces";

export const Users = () => {
    const dispatch = useAppDispatch();
    const allUsers: User[] = useAppSelector(getAllUsers);

    useEffect(() => {
        dispatch(fecthAllUsersThunk());
    }, [])
    
    
    const cols: Object[] = [
        {property: '', display: (data: User) => (<img src={data.Picture} alt="picture"/>)},
        {property: 'Full Name', display: (data: User) => data.Full_Name},
        {property: 'Employee ID', display: (data: User) => data.Employee_ID},
        {property: 'Email', display: (data: User) => data.Email},
        {property: 'Start Date', display: (data: User) => data.Start_Date},
        {property: 'Description', display: (data: User) => data.Description},
        {property: 'Contact', display: (data: User) => data.Contact},
        {property: 'Status', display: (data: User) => data.Status}
    ];

    const tabs: Object[] = [
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