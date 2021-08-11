class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.integer :artist_id, null: false
      t.string :title, null: false
      t.string :description

      t.timestamps
    end
    add_index :tracks, [:artist_id, :title]
  end
end
