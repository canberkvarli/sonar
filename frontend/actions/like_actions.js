import * as APIUtil from "../util/like_api_util";

import { receiveTrack } from "./track_actions";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DELETE_LIKE = "REMOVE_LIKE";

export const receiveLike = (track) => ({ type: RECEIVE_LIKE, track });
export const removeLike = (track) => ({ type: DELETE_LIKE, track });

export const createLike = (likerId, trackId) => (dispatch) =>
  APIUtil.createLike(likerId, trackId).then((track) =>
    dispatch(receiveLike(track))
  );

export const deleteLike = (likeId, track) => (dispatch) =>
  APIUtil.deleteLike(likeId, track).then((track) => dispatch(removeLike(track)));