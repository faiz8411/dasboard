import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin: superAdmin, isLoading } = useAuth()
    const location = useLocation()
    if (isLoading) {
        return <Spinner color="success" />
    }
    if (user.email && superAdmin) {
        return children
    }
    else {

        return <Navigate to="/home" state={{ from: location }} />;

    }

};

export default AdminRoute;