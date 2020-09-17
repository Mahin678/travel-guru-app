import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const {UserInfo} = useContext(UserContext)
    const [loggedInUser, setLoggedInUser] = UserInfo;
    console.log( loggedInUser,"loggedInUser")
    return (
        <div>
            <Route
            {...rest}
            render={({ location }) =>
            loggedInUser.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
            />
        </div>
    );
};

export default PrivateRoute;