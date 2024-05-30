import { InitialState } from "./InitialStateInterface"

export interface UsersState extends InitialState{
    users: Array<User>,
    user: User | null,
}

export interface User {
    _id?: string,
    Picture: string,
    Full_Name: string,
    Employee_ID: string,
    Email: string,
    Start_Date: string,
    Description: string,
    Contact: string,
    Status: string,
}