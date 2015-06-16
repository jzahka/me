Rails.application.routes.draw do
  root 'attributes#index'
  resources :attributes, only: [:index, :create, :update]
end
