import { connect } from 'react-redux';
import { fetchTrack, fetchTracks, uploadTrack, deleteTrack } from '../../actions/track_actions';
import { setCurrentProgress } from '../../actions/playhead_actions';
import TrackIndex from './track_index';


const mSTP = (state) => ({
    tracks: Object.values(state.entities.tracks),
    currentTime: state.playhead.currentTime
    
})

const mDTP = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
    uploadTrack: (track) => dispatch(uploadTrack(track)),
    setCurrentProgress: (progress) => dispatch(setCurrentProgress(progress))
})



export default connect(mSTP, mDTP)(TrackIndex)