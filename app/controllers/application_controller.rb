class ApplicationController < ActionController::Base
    # CRRULLL
    protect_from_forgery with: :exception
    before_action :underscore_params!
    skip_before_action :verify_authenticity_token

    helper_method :current_user, :require_logged_in, :logged_in?
    private 
    
    def underscore_params!
        underscore_hash = -> (hash) do
            hash.transform_keys!(&:underscore)
            hash.each do |key, value|
            if value.is_a?(ActionController::Parameters)
                underscore_hash.call(value)
            elsif value.is_a?(Array)
                value.each do |item|
                next unless item.is_a?(ActionController::Parameters)
                underscore_hash.call(item)
                end
            end
            end
        end
        underscore_hash.call(params)
    end    


    def current_user
        # find the user by their session token in the cookie
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def require_logged_in
        unless current_user
            render json: { base: ['invalid credentials'] }, status: 401
        end
    end

    def login(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
        current_user = nil
    end


end
