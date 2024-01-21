import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
    const { currentUser } = useAuth();

    if (currentUser) {
        return children
    }
    return <Navigate to="/login" />
}
