import { InitialState } from "./InitialStateInterface"

export interface RoomsState extends InitialState{
    rooms: Array<Room>,
    room: Room | null,
}

export interface Room {
    Picture: string,
    Room_Number: number,
    Room_ID: number,
    Room_Type: string,
    Amenities: string | Array<string>,
    Price: number,
    Offer_Price: number,
    Status: string,
}