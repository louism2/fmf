class RoomsController < ApplicationController

  def index
    render json: [ {id: 1, name: 'first room'}, {id: 2, name: 'second room'}]
  end

  def show
    # - get members who have "current location" and return those locations
    # - find members without "current location" and ask for an update user.update_requested = true;
    locations = [
        {id: 1, name: 'Louie Mancini', location: [-34.397, 150.644]},
        {id: 3, name: 'Garrett McCauley', location: [-34.396, 150.645]}
    ]

    render json: { name: 'Amazing room', members: [1,2,3], member_locations: locations }
  end

end