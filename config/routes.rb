Rails.application.routes.draw do
  resources :profiles
  resources :listings
  resources :business_owner_profiles

  get 'home/index'
  devise_for :users, controllers: { registrations: 'users/registrations' } do
    resources :profiles
    resources :listings

  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root "home#index"


end
