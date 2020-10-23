import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import withState from './withState';

class PrivateRoute extends Component {
    render() {
        const {
            store: { isLoggedIn },
            component: Component,
            redirectTo = '/login',
            
            ...rest
        } = this.props;
        console.log(this.props)
        return (
            <Route
                render={props =>
                    isLoggedIn ? (
                        <Component id={this.props.store.id} {...props} />
                    ) : (
                        <Redirect to={redirectTo} />
                    )
                }
                {...rest}
            />
        );
    }
}

export default withState(PrivateRoute);
