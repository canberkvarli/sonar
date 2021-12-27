import {RECEIVE_CURRENT_TRACK, PAUSE_TRACK, PLAY_TRACK, SEEK_TRACK} from "../actions/playhead_actions";


const _nullTrack = {
  currentTrack: null,
  paused: true,
  currentTime: 0
}; 

const PlayheadReducer = (state = _nullTrack, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case PLAY_TRACK:
      return Object.assign(newState, {
        paused: false,
        currentTrack: state.currentTrack,
        currentTime: state.currentTime,
      });

    case PAUSE_TRACK:
      return Object.assign(newState, {
        paused: true,
        currentTrack: state.currentTrack,
        currentTime: state.currentTime,
      });
    case RECEIVE_CURRENT_TRACK:
      return Object.assign(newState, state, {
        currentTrack: action.track,
        currentTime: 0,
      });
    case SEEK_TRACK:
      return Object.assign(newState, state, {
         currentTime: action.progress
      });
    default:
      return state;
  }
};


export default PlayheadReducer;