# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  age             :integer
#  artist_name     :string
#  bio             :string
#  city            :string
#  country         :string
#  first_name      :string
#  last_name       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_username_and_artist_name  (username,artist_name)
#
class User < ApplicationRecord
     validates :username, uniqueness: true
     validates :session_token, presence: true
     validates :password, length: {minimum: 6}, allow_nil: true

    attr_accessor :password

    after_initialize :ensure_session_token

    has_many :tracks,
    foreign_key: :artist_id,
    class_name: :Track
    
    #  SPIER

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user :nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end


    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
         self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        # scramble the old session_token
         self.session_token = SecureRandom.urlsafe_base64
         self.save
         self.session_token
    end
end
