import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
export const AuthContext=createContext()
const AuthProvider = (props) => {
   
    const {children}=props
    return (
        <AuthContext.Provider value={useFirebase()}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;