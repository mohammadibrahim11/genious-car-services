import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Privateroute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
 if(loading){
    return <h1 className='text-5xl'> loading...</h1>
 }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default Privateroute;