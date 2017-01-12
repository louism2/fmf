class RoomsController < ApplicationController

  def index
    render json: [ {id: 1, name: 'first room'}, {id: 2, name: 'second room'}]
  end

  def show
    render json: { id: params[:id], name: 'Amazing room', members: 3 }
  end

end