import * as convert from "./camel_to_snake.js";

export const fetchTracks = (data) => (
    $.ajax({
        url: '/api/tracks',
        error: (err) => console.log(err),
        data
    })
)

export const fetchTrack = (trackId) => (
    $.ajax({
        url: `/api/tracks/${trackId}`,
        error: (err) => console.log(err)

    })
)

export const uploadTrack = (trackForm) => {
  let formData = convert.formDataConvert(trackForm);

  const req = $.ajax({
    method: 'POST',
    url: `api/songs/`,
    data: formData,
    contentType: false,
    processData: false,
  })
  return req
}

export const deleteTrack = (trackId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/tracks/${trackId}`,
        error: (err) => console.log(err)
    })
)