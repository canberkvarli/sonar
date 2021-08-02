class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true
      t.string :artist_name, unique: true
      t.integer :age
      t.string :bio
      t.string :city
      t.string :country
      t.string :first_name
      t.string :last_name

      t.timestamps
    end
    add_index :users, [:username, :artist_name]
    
  end
end
