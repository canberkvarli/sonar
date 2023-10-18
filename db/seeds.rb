require 'aws-sdk-s3'

Track.destroy_all
User.destroy_all
Like.destroy_all

# USERS

p "creating users"

canberk = User.create!({
                         username: 'canberko560',
                         password_digest: 'some_digest',
                         artist_name: 'Ebu Zehir',
                         age: '25',
                         bio: 'An artist on a journey to uncover the magical truth by mixing authentic sounds together and create the world of music.',
                         city: 'San Francisco',
                         country: 'USA',
                         first_name: 'Canberk',
                         last_name: 'Varli'
                       })

taleofus = User.create!({
                          username: 'taleofus99',
                          password_digest: 'some_digest',
                          artist_name: 'Tale of Us'
                        })

muse = User.create!({
                      username: 'MattChrisDom',
                      password_digest: 'some_digest',
                      artist_name: 'MUSE',
                      city: 'Glasgow',
                      country: 'Scotland'
                    })

aurora = User.create!({
                        username: 'longlivethetrees',
                        password_digest: 'some_digest',
                        artist_name: 'Aurora'
                      })

demoUser = User.create!({
                          username: 'demouser',
                          password: 'password'
                        })

p "Users created"
#  TRACKS

# seeds.rb
# get photos from s3
# get audio files from s3

p "creating tracks"

photo_file1 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/cry.jpeg')
photo_file2 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/1975.jpeg')
photo_file3 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/darksun.jpeg')
photo_file4 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/dense.jpeg')
photo_file5 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/earth.jpg')
photo_file6 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/glitch.jpeg')
photo_file7 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/nyc.jpeg')
photo_file8 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/pink_sea.jpeg')
photo_file9 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/purple.png')
photo_file10 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/red.jpeg')
photo_file11 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/retro.jpeg')
photo_file12 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/trackImages/seaspan.jpeg')

audioFile1 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/What+remains+after+a+thunder+strike.mp3')
audioFile2 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-a-voice-from-the-past-548.mp3')
audioFile3 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-better-times-are-coming-173.mp3')

audioFile4 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-cbpd-400.mp3')
audioFile5 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-christmas-night-537.mp3')
audioFile6 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-deep-techno-ambience-134.mp3')
audioFile7 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-a-country-romance-36.mp3')
audioFile8 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-deep-urban-623.mp3')
audioFile9 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-house-vibes-129.mp3')
audioFile10 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-lonely-in-the-bar-518.mp3')
audioFile11 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-rock-the-game-49.mp3')
audioFile12 = URI.open('https://sonar-seeds.s3.us-west-1.amazonaws.com/audioFiles/mixkit-love-in-the-air-41.mp3')

track1 = Track.create!({
                         title: 'W.R.A.A.T.S',
                         artist_id: canberk.id,
                         description: '(W)hat (R)emains (A)fter (A) (T)hunder (S)trike'
                       })

track2 = Track.create!({
                         title: 'Boiler Plate',
                         artist_id: taleofus.id,
                         description: 'Mixed with effort and detailed work, this song is the everything a person will need before a good start.'
                       })

track3 = Track.create!({
                         title: 'Running with The Wolves',
                         artist_id: aurora.id,
                         description: 'The busy man is least busy with living'

                       })

track4 = Track.create!({
                         title: 'Vampire',
                         artist_id: canberk.id,
                         description: "The truth knocks on the door and you say, ‘Go away, I'm looking for the truth,’ and so it goes away. Puzzling"

                       })
track5 = Track.create!({
                         title: 'Glass',
                         artist_id: canberk.id,
                         description: 'The best things in life are free. The second best things are very, very expensive'

                       })
track6 = Track.create!({
                         title: 'Gunta',
                         artist_id: canberk.id,
                         description: 'There will come a time when you believe everything is finished. That will be the beginning. '

                       })
track7 = Track.create!({
                         title: 'Earth',
                         artist_id: aurora.id,
                         description: " With some hip tracks as the backdrop, two young rappers offer ideas for how to get feelings out
  in constructive ways, e.g.Let yourself cry when youre feeling really sad, ask for some attention when youre down or mad. The rap moves into an R & B sound,
  with young soloists demonstrating ways to communicate their feelings and work through problems in words, using a helpful formula called an I-Message. "

                       })
track8 = Track.create!({
                         title: 'Churchyard',
                         artist_id: aurora.id,
                         description: "Everybody needs to hear positive things about themselves. Simple recognition from friends and peers can make a day go right. Listeners
  can easily add their own good thoughts to the many real-life affirmations offered here."

                       })
track9 = Track.create!({
                         title: 'Warrior',
                         artist_id: aurora.id,
                         description: "A reggae style informs this conflict-resolution song about how to handle the situation when a friend betrays a confidence, or even when
  you suspect someone stole from you. The strategy wheel offers several non-violent options for dealing with big trouble."

                       })
track10 = Track.create!({
                          title: 'Mono',
                          artist_id: taleofus.id,
                          description: "A gospel-style choir joins in on this rousing bilingual Spanish-English chant originally written by Harmony Grisman. The
  arrangement invites participation as it breaks down the walls between people."

                        })
track11 = Track.create!({
                          title: 'Ebu bambeba',
                          artist_id: taleofus.id,
                          description: 'What do you do when someone spills pink juice all over your t-shirt? It can spark a fight - or a great discussion. Ebu bambeba turns out   to be the magic word, spelling out some very helpful tactics for working through a conflict.'

                        })
track12 = Track.create!({
                          title: 'Tataki',
                          artist_id: taleofus.id,
                          description: 'One of the simplest parts of human communication is also often the hardest - good listening. This song, based on a Sufi chant, celebrates the      satisfaction of receiving good attention. The driving bass and bongos reinforce the compelling message of the refrain: `Listen! We all want to be heard.'

                        })
track1.photo.attach(io: photo_file1, filename: 'cry.jpeg')
track2.photo.attach(io: photo_file2, filename: '1975.jpeg')
track3.photo.attach(io: photo_file3, filename: 'darksun.jpeg')
track4.photo.attach(io: photo_file4, filename: 'dense.jpeg')
track5.photo.attach(io: photo_file5, filename: 'earth.jpeg')
track6.photo.attach(io: photo_file6, filename: 'glitch.jpeg')
track7.photo.attach(io: photo_file7, filename: 'nyc.jpeg')
track8.photo.attach(io: photo_file8, filename: 'pink_sea.jpeg')
track9.photo.attach(io: photo_file9, filename: 'purple.png')
track10.photo.attach(io: photo_file10, filename: 'red.jpeg')
track11.photo.attach(io: photo_file11, filename: 'retro.jpeg')
track12.photo.attach(io: photo_file12, filename: 'seaspan.jpeg')

track1.audio.attach(io: audioFile1, filename: 'wraats')
track2.audio.attach(io: audioFile2, filename: 'avoicefromthepast')
track3.audio.attach(io: audioFile3, filename: 'bettertimesarecoming')

track4.audio.attach(io: audioFile4, filename: 'cbpd')
track5.audio.attach(io: audioFile5, filename: 'christmasnight')
track6.audio.attach(io: audioFile6, filename: 'ambiance')
track7.audio.attach(io: audioFile7, filename: 'countryromance')
track8.audio.attach(io: audioFile8, filename: 'deepurban')
track9.audio.attach(io: audioFile9, filename: 'house')
track10.audio.attach(io: audioFile10, filename: 'lonelyinthebar')
track11.audio.attach(io: audioFile11, filename: 'rockthegame')
track12.audio.attach(io: audioFile12, filename: 'loveintheair')

p "Tracks created"

p 'Seeds created'
