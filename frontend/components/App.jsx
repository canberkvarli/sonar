import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Link,
    Redirect,
    Switch,
    HashRouter
} from 'react-router-dom';

import LogInFormContainer from "./session_form/login_form_container"
import SignUpFormContainer from './session_form/signup_form_container';




const App = () => (
    <div>
        {/* <LogInFormContainer /> */}
        <SignUpFormContainer />
        <LogInFormContainer />
    </div>
);

export default App;