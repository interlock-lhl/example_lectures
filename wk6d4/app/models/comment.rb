class Comment < ApplicationRecord
  belongs_to :post

  validates :who, presence: true
  validates :body, length: { minimum: 3 }
end
