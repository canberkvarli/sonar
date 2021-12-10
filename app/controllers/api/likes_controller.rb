class Api::LikesController < ApplicationController

  def index 
    @likes = Like.all
  end


    def create
    # 
    @like = Like.new(like_params)

    
    if @like.save!
      @track = Track.find(@like.track_id)
      ###
      render "api/tracks/show"
    else
      render json: @like.errors.full_message, status: 422
    end
  end

  def destroy
    
    @like = Like.find(params[:id])

    #t.likes.each do |like|
    # count = 0
    # if like.liker_id == @like.liker_id
    # count += 1
    # end
    # if count > 2 
    # 
    # end
    #end 


    
    
    if @like.destroy
      render json: @like
    else
      render json: @like.errors.full_message, status: 422
    end
  end


  private
  def like_params
    params.require(:like).permit(:liker_id, :track_id)
  end
end
