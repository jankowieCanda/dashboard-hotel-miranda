import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { rooms_data } from '../data';

export const Rooms = (props) => {

    const data = rooms_data;
    
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
            <Data_Table cols={cols} data={data}/>
            <SideNav />
        </>
    );
}