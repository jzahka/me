class CreateAttributes < ActiveRecord::Migration
  def change
    create_table :attributes do |t|
      t.text :name, null: false
      t.integer :up_votes, null: false
      t.integer :down_votes, null: false
      t.boolean :enabled, null: false

      t.timestamps
    end
    add_index :attributes, :name, :unique => true
    change_column_default :attributes, :up_votes, 0
    change_column_default :attributes, :down_votes, 0
    change_column_default :attributes, :enabled, false
  end
end
