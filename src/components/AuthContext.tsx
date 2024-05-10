import { ReactNode, createContext, useReducer } from 'react';
import { LOCAL_AUTH } from '../var';

const initialState: AuthUser = {
    isAuth: localStorage.getItem(LOCAL_AUTH) !== null,
    name: '',
    email: ''
}

const reducer = (state: AuthUser, action: string) => {
    switch(action) {
        case 'login':
            state = {isAuth: true, name: 'Gabriel', email: 'email@algo.com'};
            localStorage.setItem(LOCAL_AUTH, JSON.stringify(state));
            return state;
        case 'logout':
            localStorage.removeItem(LOCAL_AUTH);
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