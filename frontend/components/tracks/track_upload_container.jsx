
import { connect } from 'react-redux';
import { deleteTrack, uploadTrack } from '../../actions/track_actions';
import TrackUpload from './track_upload'

const mSTP = (state, ownProps) => {
    // 
    return {
        currentUser: state.entities.users[state.session.id],
        track: {
            artistId: state.session.id,
            title: '',
            description: '',
            imageFile: null,
            imageUrl: null,
            audioFile: null,
            audioUrl: null
        }
    }
}

const mDTP = dispatch => {
    return {
        uploadTrack: (data) => dispatch(uploadTrack(data)),
        deleteTrack: (trackId) => dispatch(deleteTrack(trackId))
    }
}

export default connect(mSTP, mDTP)(TrackUpload)