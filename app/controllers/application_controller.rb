class ApplicationController < ActionController::Base
    # CRRULLL
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token

    helper_method :current_user, :require_logged_in, :logged_in?
    private 
    
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
