class TracksController < ApplicationController
  def create
    @track = Track.save!(track_params)
    render json: @track
  end

  def index
    render json: Track.all
  end

  def destroy
    @track = Track.find(params[:id])
    render json: @track.destroy!
  end

  def track_params
    params.require(:track).permit(:name, :roll)
  end
end
