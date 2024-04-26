import { useDispatch, useSelector } from "react-redux";
import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { Reviews } from "../components/Reviews";
import { SideNav } from "../components/SideNav";
import { getAllReviews, getError, getReview, getStatus } from "../features/contact/contactSlice";
import { useEffect } from "react";
import { fecthAllReviewsThunk } from "../features/contact/contactThunk";

export const Contact = (props) => {
    const dispatch = useDispatch();
    const allReviews = useSelector(getAllReviews);
    const review = useSelector(getReview);
    const status = useSelector(getStatus);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fecthAllReviewsThunk());
    }, [])
    
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
            <Data_Table cols={cols} data={allReviews}/>
        </>
    );
}