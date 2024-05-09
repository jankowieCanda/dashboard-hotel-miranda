import { InitialState } from "./InitialStateInterface"

export interface BookingsState extends InitialState {
    bookings: Array<Booking>,
    booking: Booking | null,
}

export interface Booking {
    Guest: string,
    Reservation_ID: number,
    Order_Date: string,
    Check_In: string,
    Check_Out: string,
    Special_Request: string,
    Room_Type: string,
    Room_Number: number,
    Status: string
}