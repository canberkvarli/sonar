import { connect } from 'react-redux';
import { fetchTrack, fetchTracks } from '../../actions/track_actions';
import Search from './search'


const mSTP = (state) => ({
    tracks: Object.values(state.entities.tracks)

})

const mDTP = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId))
})


export default connect(mSTP,mDTP)(Search)