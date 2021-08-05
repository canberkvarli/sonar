class Api::TracksController < ApplicationController
    def index
        @tracks = Track.all
        render json: @tracks
    end


    def create
        @track = Track.new(track_params)
    end




    private
    def track_params
        params.require(:track).permit(:title, :description)
    end
end
