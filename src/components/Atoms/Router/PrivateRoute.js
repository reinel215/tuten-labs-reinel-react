import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({...props}) => {

    const user = useSelector(state => state.user);

    return (
        <React.Fragment>
            {user.user?.userRole?.userRole === "ADMIN" ? <Route {...props} /> : <Redirect to="/" />}
        </React.Fragment>
    )
}

export default PrivateRoute
