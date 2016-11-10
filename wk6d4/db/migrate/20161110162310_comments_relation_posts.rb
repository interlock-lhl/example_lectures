class CommentsRelationPosts < ActiveRecord::Migration[5.0]
  def change
    change_table :comments do |t|
      t.integer :post_id
    end

    add_foreign_key :comments, :post
  end
end
