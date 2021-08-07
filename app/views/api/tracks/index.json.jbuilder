json.array! @tracks do |track|
    json.extract! track, :id, :title

    json.photoUrl url_for(track.photo) if track.photo.attached?
    
end