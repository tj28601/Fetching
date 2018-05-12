class Api::V1::BooksController < ApplicationController
# class Api::V1::BooksController < ApiController
skip_before_action :verify_authenticity_token
protect_from_forgery unless: -> { request.format.json? }

def index
  render json: Book.all
  end
  def new
    @book = Book.new
  end
    def create
      @book = Book.new(book_params)
      if @book.save
        render json: Book.all
      else
        render json: { error: @book.errors.full_messages }, status: :unprocessable_entity
      end
    end
    def update
      @book = Book.find(params[:id])
      if @book.update_attributes(book_params)
    #   book = Book.find(book_params[:id])
      end
    end

    def destroy
#       all_books = Book.all
# @book = Book.find(params[:id])
# @book.destroy
# render json: all_books

# destroyed_book= Book.find[:book][:book_id]
# if destroyed_book.destroy
#   render json: {message:"Photo Deleted"}
# else
#   render json: { errors: destroyed_book.errors.full_messages }, status: :unprocessable_entity
# end
book = Book.find(params['id'])
book.delete
end

  #   else
  #     render json: { errors: destroyed_book.errors.full_messages }, status: :unprocessable_entity
  #   end
  # else
  #   render json: { errors: "Access Denied, Punk"}, status: 401

  # end
    # if user_signed_in?
    #   update_book = Book.where(book: book)
    #   if !update_photo.empty?
    #     Photo.destroy(photo)
    #     new_photo = Photo.new(book_params)
    #     new_photo.user = current_user
    #     if new_photo.save
    #       render json: { photo: new_photo }
    #     else
    #       render json: { photo: new_photo, errors: new_photo.errors.full_messages }, status: :unprocessable_entity
    #     end
    #   else
    #     new_photo = Photo.new(book_params)
    #     new_photo.user = current_user
    #     if new_photo.save
    #       render json: { photo: new_photo }
    #     else
    #       render json: { photo: new_photo, errors: new_photo.errors.full_messages }, status: :unprocessable_entity
    #     end
    #   end
    # else
    #   render json: { errors: "Access Denied" }, status: 401
    # end
    # end


    protected

  def book_params
    params.require(:book).permit(:title, :author)
  end

end
