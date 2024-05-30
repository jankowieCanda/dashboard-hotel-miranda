import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { getAllUsers } from "../features/users/usersSlice";
import { fecthAllUsersThunk } from "../features/users/usersThunk";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { User } from "../interfaces/UsersInterfaces";
import { Cols } from "../interfaces/ColsInterface";
import { Tabs } from "../interfaces/TabsInterface";

export const Users = () => {
    const dispatch = useAppDispatch();
    const allUsers: User[] = useAppSelector(getAllUsers);
    const [isLoading, setIsLoading] = useState(true);

    const initialFetch = async () => {
        await dispatch(fecthAllUsersThunk());
        setIsLoading(false); 
    }

    useEffect(() => {
        initialFetch();
    }, [])
    
    
    const cols: Cols[] = [
        {property: '', display: (data: User) => <img src={data.Picture} alt="picture" style={{width: "50px", height: "50px"}} />},
        {property: 'Full Name', display: (data: User) => data.Full_Name},
        {property: 'Employee ID', display: (data: User) => data.Employee_ID},
        {property: 'Email', display: (data: User) => data.Email},
        {property: 'Start Date', display: (data: User) => data.Start_Date},
        {property: 'Description', display: (data: User) => data.Description},
        {property: 'Contact', display: (data: User) => data.Contact},
        {property: 'Status', display: (data: User) => data.Status}
    ];

    const tabs: Tabs[] = [
        {label: 'All Employees'},
        {label: 'Active Employee'},
        {label: 'Inactive Employee'},
        {label: 'searchBooking', type: 'input'}
    ];

    return(
        <>
        {isLoading ? <p>loading...</p> :
            <>
            <Header title={'Users'} />
            <Data_Table cols={cols} data={allUsers} tabs={tabs} />
            <SideNav />
            </>
        }
        </>
    );
}