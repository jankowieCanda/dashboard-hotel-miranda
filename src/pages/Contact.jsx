import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { Reviews } from "../components/Reviews";
import { SideNav } from "../components/SideNav";
import { reviews_data } from "../data";

export const Contact = (props) => {

    const data = reviews_data;
    
    const cols = [
        {property: 'Date', display: data => (<div>{data.date}{data.hour}</div>)},
        {property: 'Message ID', display: data => data.message_id},
        {property: 'Customer', display: data => (<div>{data.customer_name}{data.mail}{data.phone}</div>)},
        {property: 'Subject', display: data => (<div><h3>{data.subject}</h3><p>{data.review}</p></div>)},
        {property: 'Action', display: data => (<button>Archive</button>)},
    ];

    return(
        <>
            <Header title={'Contact'} />
            <SideNav/>
            <Reviews />
            <Data_Table cols={cols} data={data}/>
        </>
    );
}