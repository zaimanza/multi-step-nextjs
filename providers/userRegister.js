
import { createContext, useReducer } from 'react';

export const UserRegister = createContext();


const initialState = {
    email: "",
    password: "",
};



function reducer(state, action) {
    switch (action.type) {
        case 'SET_EMAIL':
            return { ...state, email: action.payload }
        case 'SET_PASSWORD':
            return { ...state, password: action.payload }
        default:
            return state
    }
}

export function UserRegisterProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <UserRegister.Provider value={value}>
        {props.children}
    </UserRegister.Provider>;
}