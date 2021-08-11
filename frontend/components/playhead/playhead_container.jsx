import { connect } from 'react-redux';
import Playhead from './playhead';



const mSTP = state => ({
    tracks: Object.values(state.entities.tracks)
})


export default connect(mSTP)(Playhead);


