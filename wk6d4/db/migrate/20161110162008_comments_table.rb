class CommentsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :who, null: false
      t.text :body, null: false
      t.boolean :moderated, default: false
      t.boolean :accepted, default: false

      t.timestamps
    end
  end
end
