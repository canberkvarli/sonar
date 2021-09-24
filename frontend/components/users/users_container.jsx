import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
import { fetchTracks } from '../../actions/track_actions'
import { openModal } from '../../actions/modal_actions'
import Users from './users'

const mSTP = (state, ownProps) => {
    const tracks = Object.values(state.entities.tracks)
    const currentUser = state.entities.users[state.session.id]
    const userId = ownProps.match.params.userId;
    const pageOwner = state.entities.users[userId]

    let postedTracks = tracks.filter((track) => {
        if (!!track) {
            if (!!track.artistId) {
                if (track.artistId === ownProps.match.params.userId) return track;
            }
        }
    })

    return {
        currentUser,
        userId: ownProps.match.params.userId,
        pageOwner,
        postedTracks
    }
}

const mDTP = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchTracks: () => dispatch(fetchTracks()),
        openModal: (modal, user) => dispatch(openModal(modal, user))
    }
};

export default connect(mSTP, mDTP)(Users)