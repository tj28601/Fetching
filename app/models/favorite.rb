class Favorite < ApplicationRecord
  # validates_uniqueness_of :title, presence: true
  # validates :author, presence: true

# belongs_to :book
# belongs
belongs_to :book
belongs_to :user 
end
