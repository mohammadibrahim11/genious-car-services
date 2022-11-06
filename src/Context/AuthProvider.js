import React, { createContext, useEffect, useState } from "react";
// import getAuth from 'firebase/auth'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
// import { current } from "daisyui/src/colors";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const [loading, setLoading] = useState(true);

  const createUser = (name, email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password, name);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut  = (email,password)=>{
    return signOut(auth,email,password);
    
  } 
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return ()=>unSubscribe();
  }, []);

  const authInfo = { user, createUser, login, loading,logOut };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
