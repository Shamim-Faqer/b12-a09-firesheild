import React, { useContext } from 'react'
import {  Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoutes =({children}) => {

const {user, loading} =useContext(AuthContext);
const location = useLocation();

if(loading){
    return <p>loading......</p>
}

if (!user){
    return <Navigate to="/login" state={location.pathname} replace></Navigate>;
}

  return children;
}

export default PrivateRoutes ;