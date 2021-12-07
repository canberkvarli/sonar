import { connect } from "react-redux";
import { fetchTrack, fetchTracks } from "../../actions/track_actions";
import { createLike, deleteLike } from "../../actions/like_actions";
import { fetchUser } from "../../actions/user_actions";
import { withRouter } from "react-router";

import TrackShow from "./track_show";

const mSTP = (state, ownProps) => {
    const trackLoaded = () => {
        if (state.entities.tracks[ownProps.match.params.trackId]) {
            return true;
        } else {
            return false
        }
    }
    // let showedTrack;
    let currentUser;
    let userLikesTrack;


    if (state.session.id) {  // if there is a current session

    currentUser = state.entities.users[state.session.id];
    if (currentUser.likes) {

      if (currentUser.likes[ownProps.match.params.trackId]) {
        userLikesTrack = true;

      } else {
        userLikesTrack = false;
      }
    }
  } else {

    return {}
    
  }


  Object.values(state.entities.tracks).map(track => {
    if(track.id === ownProps.match.params.trackId){
      showedTrack = track
    }
  })

   
    
    return {

        currentUser: state.entities.users[state.session.id],
        trackId: ownProps.match.params.trackId,
        track: state.entities.tracks[ownProps.match.params.trackId], //It is showing the track by it's index not the id!
        // track: showedTrack,
        trackUrl: (trackLoaded() ? state.entities.tracks[ownProps.match.params.trackId].trackUrl : ''),
        tracks: Object.values(state.entities.tracks),
        userLikesTrack: userLikesTrack,
        currentLikeId: currentUser.likes[ownProps.match.params.trackId].id

      }
    
}


const mDTP = dispatch => {
    return {
    fetchTracks: () => dispatch(fetchTracks()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
    uploadTrack: (track) => dispatch(uploadTrack(track)),
    createLike: (like, trackId) => dispatch(createLike(like, trackId)),
    deleteLike: (likeId, trackId) => dispatch(deleteLike(likeId, trackId))
    }

}

export default withRouter(connect(mSTP, mDTP)(TrackShow));
