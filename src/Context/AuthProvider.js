import React, { createContext, useEffect, useState } from 'react';
// import getAuth from 'firebase/auth'
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword  } from "firebase/auth";
import app from '../firebase/firebase.config';
import { current } from 'daisyui/src/colors';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]= useState([]);
    const [loading,setLoading]=useState(true);
    
    const createUser = (name,email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password,name);
    }
    const login =(email,password)=>{ 
        return signInWithEmailAndPassword(auth,email,password);
}
    useEffect( ()=>{
      const unSubscribe= onAuthStateChanged (auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
        })
       return unSubscribe();
    },[])

    const authInfo={user,loading,createUser,login};

    return (
   
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
   
    );
};

export default AuthProvider;

