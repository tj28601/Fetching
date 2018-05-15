class Favorite < ApplicationRecord
  validates_uniqueness_of :title, presence: true
  validates :author, presence: true

    # foreign_key: "book_id"
end
