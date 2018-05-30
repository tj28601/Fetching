class BooksController < ApplicationController
  # skip_before_action :verify_authenticity_token
  # protect_from_forgery unless: -> { request.format.json? }
  #   protect_from_forgery with: :null_session
  def index
    @books = Book.all
  end
end
