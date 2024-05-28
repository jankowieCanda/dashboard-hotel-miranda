import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Header } from "../components/Header";
import { KPIs } from "../components/KPIs";
import { Reviews } from "../components/Reviews";
import { SideNav } from "../components/SideNav";
import { getAllReviews } from "../features/contact/contactSlice";
import { Review } from "../interfaces/ContactInterfaces";
import { fecthAllReviewsThunk } from "../features/contact/contactThunk";

export const Dashboard = () => {
  const dispatch = useAppDispatch();
  const allReviews: Review[] = useAppSelector(getAllReviews);

  useEffect(() => {
    dispatch(fecthAllReviewsThunk());
}, []);

    return (
        <>
          <Header title={'Dashboard'} />
          <SideNav/>
          <KPIs />
          <Reviews reviews={allReviews} />
        </>
    )
}