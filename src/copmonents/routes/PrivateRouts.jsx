import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouts = ({children}) => {
    const location  = useLocation()
    console.log(location);
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <div>Loading......</div>
    }
    if(user){
        return children;
    }
    return <Navigate to ='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRouts;