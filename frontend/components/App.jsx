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
import TrackShowContainer from "./tracks/track_show_container";
import TrackUploadContainer from "./tracks/track_upload_container";
import UsersContainer from "./users/users_container";

import Playhead from "./playhead/playhead"


const App = () => (
    <div>
            <HeaderContainer />
        <Switch>
            <Route exact path="/discover" component={TrackIndexContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" component={TrackIndexContainer} />
            <Route exact path ="/tracks/:trackId" component={TrackShowContainer} />
            <Route exact path ="/upload" component={TrackUploadContainer}/>
            <Route exact path="/users/:userId" component={UsersContainer}/>
        </Switch>
            <Playhead />
    </div>
);

export default App;