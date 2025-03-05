import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({ children }) {
    console.log('children: ', children);
    const userData = localStorage.getItem("user");
    if (!userData) {
        return <Navigate to="/" replace />
    }

    return children;
}

export default ProtectedRoutes
