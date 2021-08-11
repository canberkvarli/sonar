json.array! @tracks do |track|
    json.extract! track, :id, :title, :artist_id

    json.photoUrl url_for(track.photo) if track.photo.attached?
    json.audioUrl url_for(track.audio) if track.audio.attached?
end