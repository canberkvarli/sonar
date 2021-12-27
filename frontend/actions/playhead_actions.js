export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";
export const PLAY_TRACK = "PLAY_TRACK";
export const SEEK_TRACK = "SEEK_TRACK";


export const receiveCurrentTrack = (track) => ({
    type: RECEIVE_CURRENT_TRACK,
    track
})

export const seekTrack = (progress) => ({
  type: SEEK_TRACK,
  progress,
});

export const pauseTrack = () => ({
    type: PAUSE_TRACK
})

export const playTrack = () => ({
    type: PLAY_TRACK
})



export const setCurrentTrack = (track) => dispatch => dispatch(receiveCurrentTrack(track));
export const setCurrentProgress = (progress) => dispatch => dispatch(seekTrack(progress));