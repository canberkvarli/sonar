
import { connect } from 'react-redux';
import { signup, login, logout } from '../actions/session_actions';

const mSTP = ({session, entities: { users }, errors}) => (
    {
        currentUser: users[session.id],
        errors: errors.session,
        ui: ui.modal.props.open
    }
);


const mDTP = (dispatch) => ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
});


export default connect(mSTP, mDTP)(Header);

