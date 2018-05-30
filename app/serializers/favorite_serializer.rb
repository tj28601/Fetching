class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :book_id, :book
end
