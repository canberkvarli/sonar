# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create!([{username: 'canberko560', password: 1251624, artist_name: 'Ebuzehir'} ]);
user2 = User.create!([{username: 'nottaken', password: 'zxczxc',session_token: 'XZCXZV', artist_name: 'MUSE', age: 25, bio: 'somebio', city:'SF', country: 'USA', first_name: 'C', last_name: 'V'}]);

user3 = User.create!([{username: 'yyy', artist_name: 'Tarkan', password: 'xyxyxy'}]);
user4 = User.create!([{username: 'aaa', artist_name: 'Mor ve Otesi', password: 'abaabb'}]);