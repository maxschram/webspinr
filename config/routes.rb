Rails.application.routes.draw do
  root 'session#new'

  namespace :api do
    resources :sites,
              only: [:index, :show, :update, :create, :destroy],
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

  get 'login', to: 'session#new', as: 'login'
  post 'login', to: 'session#create'
  delete 'logout', to: 'session#destroy', as: 'logout'

end
