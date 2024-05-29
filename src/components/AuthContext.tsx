import { ReactNode, createContext, useReducer } from 'react';
import { LOCAL_AUTH } from '../var';
import { User } from '../interfaces/UsersInterfaces';



const initialState: AuthUser = {
    isAuth: localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN) !== null,
    name: '',
    email: ''
}

const reducer = (state: AuthUser, action: string) => {
    switch(action) {
        case 'login':
            state = {isAuth: true, name: 'Gabriel', email: 'unmail@cualquiera.com'};
            localStorage.setItem(LOCAL_AUTH, JSON.stringify(state));
            return state;
        case 'logout':
            localStorage.removeItem(LOCAL_AUTH);
            localStorage.removeItem(import.meta.env.VITE_AUTH_TOKEN)
            return state = {isAuth: false, name: '', email: ''};
        default:
            return state;
    }
}

export const AuthContext = createContext<AuthContext>({authData: initialState, dispatchSetAuthData: () => {}});

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [authData, dispatchSetAuthData] = useReducer(reducer, initialState);
    

    return(
        <AuthContext.Provider value={{authData, dispatchSetAuthData}}>
            {children}
        </AuthContext.Provider>
    );
}