# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  liker_id   :integer          not null
#  track_id   :integer          not null
#
# Indexes
#
#  index_likes_on_liker_id  (liker_id)
#  index_likes_on_track_id  (track_id)
#
class Like < ApplicationRecord

    belongs_to :track,
    primary_key: :id,
    class_name: :Track,
    foreign_key: :track_id

    belongs_to :liker,
    primary_key: :id,
    class_name: :User,
    foreign_key: :liker_id

    
end
