import { Cols } from "./ColsInterface";
import { Tabs } from "./TabsInterface";
import { Booking } from "./BookingsInterfaces";
import { Review } from "./ContactInterfaces";
import { Room } from "./RoomsInterfaces";
import { User } from "./UsersInterfaces";

export interface Props {
    title?: string,
    cols?: Cols[],
    tabs?: Tabs[],
    orderedList?: Booking[],
    data?: Booking[] | Review[] | Room[] | User[],
}

export interface ReviewsProps {
    reviews: Review[],
}