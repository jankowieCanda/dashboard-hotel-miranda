import { Data_Table } from "../components/Data_Table";
import { Header } from "../components/Header";
import { Reviews } from "../components/Reviews";
import { SideNav } from "../components/SideNav";
import { getAllReviews } from "../features/contact/contactSlice";
import { useEffect, useState } from "react";
import { fecthAllReviewsThunk } from "../features/contact/contactThunk";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Review } from "../interfaces/ContactInterfaces";
import { Cols } from "../interfaces/ColsInterface";
import { Tabs } from "../interfaces/TabsInterface";
import { BodyContainer } from "../components/BodyContainer";

export const Contact = () => {
    const dispatch = useAppDispatch();
    const allReviews: Review[] = useAppSelector(getAllReviews);
    const [isLoading, setIsLoading] = useState(true);

    const initialFetch = async () => {
        await dispatch(fecthAllReviewsThunk());
        setIsLoading(false); 
    }

    useEffect(() => {
        initialFetch();
    }, [])
    
    const cols: Cols[] = [
        {property: 'Date', display: (data: Review) => (<div>{data.date}{data.hour}</div>)},
        {property: 'Message ID', display: (data: Review) => data.message_id},
        {property: 'Customer', display: (data: Review) => (<div>{data.customer_name}{data.mail}{data.phone}</div>)},
        {property: 'Subject', display: (data: Review) => (<div><h3>{data.subject}</h3><p>{data.review}</p></div>)},
        {property: 'Action', display: () => (<button>Archive</button>)},
    ];

    const tabs: Tabs[] = [
        {label: 'All Reviews'},
        {label: 'Archived'}
    ];

    return(
        <>
            <Header title={'Contact'} />
            <SideNav/>
            <BodyContainer>
                <Reviews reviews={allReviews} />
                <Data_Table cols={cols} data={allReviews} tabs={tabs} />
            </BodyContainer>
        </>
    );
}