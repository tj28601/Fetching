class Api::V1::FavoritesController < ApplicationController
# skip_before_action :verify_authenticity_token
def index
  # binding.pry
  render json: Favorite.where(user_id: current_user)
end
def show
end

def new
  @favorite = Favorite.new
end
  def create
    # binding.pry
    @book =Book.find(params[:id])
    @favorite = Favorite.new(favorite_params)
    @favorite.book_id =@book.id
    # @favorite.user_id = 2
    # @favorite.book_id = 137

    @favorite.user_id = current_user.id

    # @favorite.book_id =Book.find(params[:id])
    # @favorite = Favorite.new(favorite_params)
  binding.pry
    if @favorite.save

      render json: Favorite.all
    else
      render json: { error: @favorite.errors.full_messages }, status: :unprocessable_entity
    end
  end
  def update
    @favorite = Favorite.find(params[:id])
    if @favorite.update_attributes(favorite_params)
    end
  end

  def destroy
    # binding.pry
    favorite = Favorite.find(params[:id])
    favorite.delete
  end

  protected
#
  def favorite_params
    params.require(:favorite).permit(:book_id, :user_id, :book)
  end
end
