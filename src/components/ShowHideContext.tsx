import { ReactNode, createContext, useReducer } from 'react';

interface ShowHideContext {
    isHide: boolean,
    dispatchSetIsHide: React.Dispatch<string>
}

const initialState: boolean = false

const reducer = (state: boolean, action: string) => {
    switch(action) {
        case 'hide':
            return state = true;
        case 'show':
            return state = false;
        default:
            return state;
    }
}

export const ShowHideContext = createContext<ShowHideContext>({isHide: initialState, dispatchSetIsHide: () => {}});

export const ShowHideProvider = ({children}: {children: ReactNode}) => {
    const [isHide, dispatchSetIsHide] = useReducer(reducer, initialState);
    

    return(
        <ShowHideContext.Provider value={{isHide, dispatchSetIsHide}}>
            <>{children}</>
        </ShowHideContext.Provider>
    );
}