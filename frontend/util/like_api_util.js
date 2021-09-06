export const createLike = (like) => {
  return $.ajax({
    method: 'POST',
    url: `/api/tracks/${like.track_id}/likes`,
    data: { like }
  })
}

export const deleteLike = (likeId, track) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/tracks/${track.id}/likes/${likeId}`
  })
}