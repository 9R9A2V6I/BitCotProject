import React from 'react'
import { IsLogedIn } from './Screens/LoginScreen'
import { Outlet,Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    return IsLogedIn() ? <Outlet /> : <Navigate to = {"/LoginIn"} />
}

export default PrivateRoute;