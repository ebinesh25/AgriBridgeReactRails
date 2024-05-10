Rails.application.routes.draw do
  resources :favorite_items
  resources :profiles
  resources :listings
  resources :business_owner_profiles

  get 'home/index', to: 'home#index'
  get 'home/search', to: 'home#search'
  devise_for :users, controllers: { registrations: 'users/registrations' } do
    resources :profiles
    resources :listings
  end

  post 'favorite_items/toggle_favorite_item', to: 'favorite_items#toggle_favorite_item', as: 'favorite_listing'

  resources :favorite_items, only: [:update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root "home#index"


end
