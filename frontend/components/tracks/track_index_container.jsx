import { connect } from 'react-redux';
import { fetchTrack, fetchTracks, uploadTrack, deleteTrack } from '../../actions/track_actions';
import TrackIndex from './track_index';
import 'react-h5-audio-player/lib/styles.css';


const mSTP = (state) => ({
    tracks: Object.values(state.entities.tracks) 
    
    
})

const mDTP = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
    uploadTrack: (track) => dispatch(uploadTrack(track))
})



export default connect(mSTP, mDTP)(TrackIndex)