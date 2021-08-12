import React from 'react';

import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LogInFormContainer from "../components/session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import App from './App';

const Root = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <AuthRoute exact path="/login" component={LogInFormContainer} />
                <AuthRoute exact path="/signup" component={SignUpFormContainer} />
                <Route path="/" component={App} />
            
            </Switch>
        </HashRouter>
    </Provider>
)

export default Root;