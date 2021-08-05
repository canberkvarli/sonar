
export const fetchTracks = () => (
    $.ajax({
        url: '/api/tracks',
        method: "GET",
        error: (err) => console.log(err)
    })
)

export const fetchTrack = (trackId) => (
    $.ajax({
        method: "GET",
        url: `/api/tracks/${trackId}`,
        error: (err) => console.log(err)

    })
)

export const uploadTrack = (track) => (
    $.ajax({
        method: "POST",
        url: 'api/tracks',
        data: { track },
        error: (err) => console.log(err)

    })
)

export const deleteTrack = (trackId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/tracks/${trackId}`,
        error: (err) => console.log(err)
    })
)