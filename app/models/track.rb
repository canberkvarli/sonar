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
    validates :artist_id, :title, presence: true
    

    has_one_attached :photo
end
