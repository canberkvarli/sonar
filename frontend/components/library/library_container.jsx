import { connect } from 'react-redux'
import { fetchTracks } from '../../actions/track_actions'
import { fetchUser } from '../../actions/user_actions'
import { withRouter } from 'react-router'
import Library from './library'


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    tracks: state.entities.tracks,
    currentTime: state.playhead.currentTime
})

const mapDispatchToProps =  dispatch => (
    
    {
    fetchTracks: () => dispatch(fetchTracks()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    }
)



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Library));