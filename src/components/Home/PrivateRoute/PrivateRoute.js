import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth()
    let location = useLocation();

    if (isLoading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }


    if (user.email) {
        return children
        // && <form action="">
        //     <input type="text" />
        //     <br />
        //     <input type="submit" />

        // </form>
    }
    else {
        return <Navigate to="/login" state={{ from: location }} />;
    }

};

export default PrivateRoute;