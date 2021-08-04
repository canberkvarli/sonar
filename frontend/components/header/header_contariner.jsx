
import { connect } from 'react-redux';
import { signup, login, logout } from '../actions/session_actions';

const mSTP = ({session, entities: { users }, entities: {tracks}}) => (
    {
        currentUser: users[session.id]
    }
);