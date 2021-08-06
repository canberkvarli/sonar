
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

export const uploadTrack = (trackForm) => (
    $.ajax({
        method: "POST",
        url: 'api/tracks',
        data: { trackFrom },
        contentType: false,
        processData: false,
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