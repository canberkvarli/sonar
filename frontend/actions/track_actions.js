import * as APITrackUtil from '../util/track_api_util';

export const RETRIEVE_TRACK = "RETRIEVE_TRACK";
export const RETRIEVE_TRACKS = "RETRIEVE_TRACKS";
export const REMOVE_TRACK = "REMOVE_TRACK";

const UPLOAD_TRACK = "UPLOAD_TRACK";



// regular actions

const retrieveTrack = (track) => ({
    type: RETRIEVE_TRACK,
    track
})

const retrieveTracks = (tracks) => ({
    type: RETRIEVE_TRACKS,
    tracks
})