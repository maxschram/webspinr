Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api do
    resources :sites,
              only: [:show, :update, :create, :destroy],
              defaults: { format: 'json'}
    resources :elements,
              only: [:update, :create, :destroy],
              defaults: { format: 'json'}
  end
end
