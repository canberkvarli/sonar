Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
      resources :users, only:[:create, :edit, :update, :destroy, :show] do
        resources :likes, only: [:index]
      end

      resources :tracks, only:[:index, :create, :show, :destroy] do
        resources :likes, only:[:create, :destroy]
      end

      resource :session, only:[:create, :destroy]
  end
  root to: "static_pages#root"
end
