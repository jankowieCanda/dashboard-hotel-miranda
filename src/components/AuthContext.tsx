import { createContext, useReducer } from 'react';
import { LOCAL_AUTH } from '../var';

export const AuthContext = createContext(null);

const initialState = localStorage.getItem(LOCAL_AUTH) !== null ? localStorage.getItem(LOCAL_AUTH) : false;
const reducer = (state, action) => {
    switch(action) {
        case 'login':
            return state = true;
        case 'logout':
            return state = false;
        default:
            return state;
    }
}

export const AuthProvider = ({children}) => {
    const [authData, dispatchSetAuthData] = useReducer(reducer, initialState);
    

    return(
        <AuthContext.Provider value={{authData, dispatchSetAuthData}}>
            {children}
        </AuthContext.Provider>
    );
}