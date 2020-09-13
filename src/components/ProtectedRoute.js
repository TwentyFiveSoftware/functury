import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import firebase from '../firebase/firebase';

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => {
            if (firebase.auth().currentUser === null)
                return <Redirect to={'/auth'}/>;

            return <Component {...rest} {...props} />;
        }}/>
    );
};

export default ProtectedRoute;
