import React, { createContext, useEffect, useState } from 'react';
// import getAuth from 'firebase/auth'
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged  } from "firebase/auth";
import app from '../firebase/firebase.config';
import { current } from 'daisyui/src/colors';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]= useState([]);
    const [loading,setLoading]=useState(true);
    
    const createUser = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    }

    useEffect( ()=>{
      const unSubscribe= onAuthStateChanged (auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
        })
       return unSubscribe();
    },[])

    const authinfo={user,loading,createUser};

    return (
   
            <AuthContext.Provider value={authinfo}>
            {children}
            </AuthContext.Provider>
   
    );
};

export default AuthProvider;

