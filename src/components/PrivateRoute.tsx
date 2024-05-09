import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router";


export const PrivateRoute = ({children}) => {
    const authContext = useContext(AuthContext);
   
    return(
        <>
        </>
    );
}