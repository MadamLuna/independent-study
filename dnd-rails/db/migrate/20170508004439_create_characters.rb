class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string  :status
      t.integer :level
      t.integer :xp
      t.string  :character_class
      t.string  :race
      t.string  :alignment
      t.string  :deity
      t.string  :size
      t.integer :age
      t.string  :integer
      t.string  :gender
      t.integer :height
      t.string  :weight
      t.string  :eyes
      t.string  :hair

      t.timestamps null: false
    end
  end
end
