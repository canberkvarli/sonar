# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



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
            last_name: 'Varli', } );


taleofus = User.create!({
            username: 'taleofus99',
            password_digest: "some_digest",
            artist_name: 'Tale of Us',});

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
