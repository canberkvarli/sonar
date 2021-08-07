import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Link,
    Redirect,
    Switch,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'

import HeaderContainer from "./header/header_container";
import LogInFormContainer from "./session_form/login_form_container"
import SignUpFormContainer from './session_form/signup_form_container';
import TrackIndexContainer from "./tracks/track_index_container";
import Modal from './modal/modal'
import Search from './search/search'




const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">Sonar</Link>
            <HeaderContainer />
        </header>
        <Switch>
            <Modal>
                <AuthRoute exact path="/" component={LogInFormContainer} />
                <AuthRoute exact path="/" component={SignUpFormContainer} />
            </Modal>
            <Route exact path="/discover" component={TrackIndexContainer} />
            <Route exact path="/" component={TrackIndexContainer} />
        </Switch>
    </div>
);

export default App;