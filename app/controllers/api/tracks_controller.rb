class Api::TracksController < ApplicationController
    def index
        @tracks = Track.all
        render json: @tracks
        
    end


    def create
        @track = Track.new(track_params)
        
        if @track.save
            # render :show
            render json: @track
        else
            render json: @track.errors.full_messages, status: 402
        end
    end

    def show
        @track = Track.find(params[:id])
    end

    def destroy
        @track = Track.find(params[:id])
        if @track.destroy!
            render :index
        else
            render json: @track.errors.full_messages
        end
    end



    private
    def track_params
        params.require(:track).permit(
            :artist_id,
            :title,
            :description
        )
    end
end
