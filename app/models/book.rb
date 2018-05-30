class Book < ApplicationRecord
  validates_uniqueness_of :title, presence: true
  validates :author, presence: true
  has_many :users
  has_many :favorites, through: :users
end
