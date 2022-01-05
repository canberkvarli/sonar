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


import Waveform from './waveform/waveform';
import PlayheadContainer from "./playhead/playhead_container";
import { ErrorBoundary }  from 'react-error-boundary';
import { ErrorFallback } from '../util/error_boundary';
// import { WaveformContainer } from '../components/tracks/waveform_container';



const App = () => {


    return(
        <div>
            <HashRouter>
                <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => {
                        // reset the state of your app so the error doesn't happen again
                    }}
                >
                    <HeaderContainer />
                    
                    <Route exact path ="/tracks/:trackId" component={TrackShowContainer} />
                    <ProtectedRoute exact path ="/upload" component={TrackUploadContainer}/>
                    <Route exact path="/users/:userId" component={UsersContainer}/>
                    <Route exact path="/" component={TrackIndexContainer} />
                    <Route exact path="/library" component={LibraryContainer}/>
                </ErrorBoundary>
                {/* <WaveformContainer /> */}
                <PlayheadContainer />
            </HashRouter>
        </div>
    )
};

export default App;