class HomesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def index
  end
  def about 
  end
end
