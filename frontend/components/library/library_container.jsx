import { connect } from 'react-redux'
import Library from './library'


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    tracks: state.entities.tracks
})

const mapDispatchToProps =  dispatch => ({
    fetchTracks: () => dispatch(fetchTracks())
})



export default connect(mapStateToProps, mapDispatchToProps)(Library);