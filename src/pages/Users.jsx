import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { users_data } from '../data';

export const Users = () => {

    const data = users_data;
    
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
            <Data_Table cols={cols} data={data}/>
            <SideNav />
        </>
    );
}