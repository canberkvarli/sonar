
export const fetchTracks = () => (
    $.ajax({
        url: '/api/tracks',
        method: "GET"
    })
)