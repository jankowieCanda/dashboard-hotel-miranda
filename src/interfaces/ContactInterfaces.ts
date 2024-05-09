import { InitialState } from "./InitialStateInterface"

export interface ContactState extends InitialState{
    reviews: Array<Review>,
    review: Review | null,
}

export interface Review {
    date: string,
    hour: string,
    message_id: number,
    subject: string,
    review: string,
    picture: string,
    customer_name: string,
    mail: string,
    phone: string,
}