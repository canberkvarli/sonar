# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Track.destroy_all
User.destroy_all



# USERS

canberk = User.create!({
            username: 'canberko560',
            password_digest: "some_digest",
            artist_name: 'Ebu Zehir',
            age: '25',
            bio: 'An artist on a journey to uncover the magical truth by mixing authentic sounds together and create the world of music.',
            city: 'San Francisco',
            country: 'USA',
            first_name: 'Canberk',
            last_name: 'Varli'});


taleofus = User.create!({
            username: 'taleofus99',
            password_digest: "some_digest",
            artist_name: 'Tale of Us'});

muse = User.create!({
            username: 'MattChrisDom',
            password_digest: "some_digest",
            artist_name: 'MUSE',
            city: "Glasgow",
            country: "Scotland"});

aurora = User.create!({
            username: 'longlivethetrees', 
            password_digest: "some_digest",
            artist_name: 'Aurora'
            });


#  TRACKS

# seeds.rb


require 'open-uri'

photoFile1 = open("https://s3-us-west-1.amazonaws.com/sonarbucket-dev/8QP5nnN3F19b2BMgQnuqj3Fo")
photoFile2 = URI.open("https://sonarbucket-dev.s3.us-west-1.amazonaws.com/DgiTGw2TY8G1GX6tcwSfoR8X")
photoFile3 = URI.open("https://sonarbucket-dev.s3.us-west-1.amazonaws.com/erAFWoEw8gbTbhfSdiJTU522")
photoFile4 = URI.open("https://sonarbucket-dev.s3.us-west-1.amazonaws.com/vpoQ1vFGAbq3faSHusdQG9Mt")

audioFile1 = URI.open("https://sonarbucket-dev.s3.us-west-1.amazonaws.com/audio/Moonlight-sonata-piano.mp3")
audioFile2 = URI.open("https://sonarbucket-dev.s3.us-west-1.amazonaws.com/audio/What+remains+after+a+thunder+strike.mp3")
audioFile3 = URI.open("https://sonarbucket-dev.s3.us-west-1.amazonaws.com/audio/Oath+of+God.aif")


track1 = Track.create!({
    title: "W.R.A.A.T.S",
    artist_id: canberk.id,
    description: "(W)hat (R)emains (A)fter (A) (T)hunder (S)trike"
    })
    
track2 = Track.create!({
    title: "Boiler Plate",
    artist_id: taleofus.id,
    description: "Mixed with effort and detailed work, this song is the everything a person will need before a good start."
    })

track3 = Track.create!({
    title: "Running with The Wolves",
    artist_id: aurora.id,
    description: "Only Love"

})
    
    track1.photo.attach(io: photoFile1, filename: 'earth.jpg')
    track2.photo.attach(io: photoFile2, filename: 'mysterious.jpg')
    track3.photo.attach(io: photoFile3, filename: 'jupiter.jpg')
    
    track1.audio.attach(io: audioFile1, filename: 'wraats')
    track2.audio.attach(io: audioFile2, filename: 'moonlight')
    track3.audio.attach(io: audioFile3, filename: 'oathofgod')
    