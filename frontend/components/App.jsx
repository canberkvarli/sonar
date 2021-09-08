import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Link,
    Redirect,
    Switch,
    HashRouter
} from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util'

import HeaderContainer from "./header/header_container";
import TrackIndexContainer from "./tracks/track_index_container";
import TrackShowContainer from "./tracks/track_show_container";
import TrackUploadContainer from "./tracks/track_upload_container";
import UsersContainer from "./users/users_container";
import LibraryContainer from "./library/library_container";
// import TrackIndexItemContainer from "./tracks/track_index_item_container";
import PlayheadContainer from "./playhead/playhead_container"



const App = () => (
    <div>
        <HashRouter>
            <HeaderContainer />
        <Switch>
            <Route exact path ="/tracks/:trackId" component={TrackShowContainer} />
            <ProtectedRoute exact path ="/upload" component={TrackUploadContainer}/>
            <Route exact path="/users/:userId" component={UsersContainer}/>
            <Route exact path="/library" component={LibraryContainer}/>
            <Route exact path="/" component={TrackIndexContainer} />
        </Switch>
            {/* <PlayheadContainer /> */}
        </HashRouter>
    </div>
);

export default App;