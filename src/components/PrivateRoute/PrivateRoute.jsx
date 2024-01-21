import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

export default function PrivateRoute({children}) {
    const { currentUser } = useAuth();

    if (currentUser) {
        return children
    }
    return <Navigate to="/login" />
}
