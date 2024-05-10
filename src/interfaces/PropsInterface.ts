import { Cols } from "./ColsInterface";
import { Tabs } from "./TabsInterface";
import { Booking } from "./BookingsInterfaces";

export interface Props {
    title?: string,
    cols: Cols[],
    tabs: Tabs[],
    orderedList: Booking[],
    data: Booking[]
}