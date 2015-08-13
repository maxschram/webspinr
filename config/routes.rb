Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api do
    resources :sites,
              only: [:show, :update, :create, :destroy],
              defaults: { format: 'json'}
    resources :elements,
              only: [:update, :create, :destroy],
              defaults: { format: 'json'}
    resources :pages,
              only: [:update, :create, :destroy],
              defaults: { format: 'json'}
  end

  get 'editor', to: 'editor#load'
  get 'sites', to: 'sites#show'
  get 'signup', to: 'users#new', as: 'signup'
  post 'signup', to: 'users#create'
end
