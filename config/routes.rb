Rails.application.routes.draw do
  # root 'homes#index'
  root 'books#index'
  devise_for :users

  resources :books


  # resources :cows only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :create]
    end
  end
end
