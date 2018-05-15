class Api::V1::BooksController < ApplicationController

  def index
  # binding.pry
    render json: Book.all
  end
  def show
  end

  def new
    @book = Book.new
  end
  def create
# binding.pry
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
    end
  end

  def destroy
    book = Book.find(params[:id])
    book.delete
  end

protected

  def book_params
    params.require(:book).permit(:author, :title)
  end
end
