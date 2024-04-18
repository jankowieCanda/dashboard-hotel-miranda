import styled from "styled-components";
import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { bookings_data } from "../data";

const Table_Wrapper = styled.div`
    width: 70%;
    margin-left: 21.568em;
    margin-top: 7.6em;
`;


export const Bookings = (props) => {
    
    const data = bookings_data;
    
    const cols = [
        {property: 'Guest', display: data => data.Guest},
        {property: 'Reservation ID', display: data => data.Reservation_ID},
        {property: 'Order Date', display: data => data.Order_Date},
        {property: 'Check In', display: data => data.Check_In},
        {property: 'Check Out', display: data => data.Check_Out},
        {property: 'Special Request', display: () => (<button>view notes</button>)},
        {property: 'Room Type', display: data => data.Room_Type},
        {property: 'Room Number', display: data => data.Room_Number},
        {property: 'Status', display: data => data.Status}
    ];  

    return(
        <>
            <Header title={'Bookings'} />
            <Table_Wrapper>
                <Data_Table cols={cols} data={data}/>
            </Table_Wrapper>
            <SideNav />
        </>
    );
}