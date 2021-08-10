# == Schema Information
#
# Table name: tracks
#
#  id          :bigint           not null, primary key
#  description :string
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  artist_id   :integer          not null
#
# Indexes
#
#  index_tracks_on_artist_id_and_title  (artist_id,title)
#
class Track < ApplicationRecord
    validates :title, presence: true
    

    has_one_attached :photo
    has_one_attached :audio

    
end
