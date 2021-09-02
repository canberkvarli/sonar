import { connect } from 'react-redux';
import Playhead from './playhead';



const mSTP = state => ({
    tracks: Object.values(state.entities.tracks)

})


const mDTP = dispatch => ({

})


export default connect(mSTP)(Playhead);


