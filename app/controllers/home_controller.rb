class HomeController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def index
    @user = current_user
    @profile = current_user.profile
    # @listings = Listing.all

    if @profile
      # user_profile = current_user # Assuming you have a way to get the current user
      user_coordinates = [@profile.latitude, @profile.longitude]

    # Find all listings sorted by distance from the user's profile location
    @listings = Listing.near(user_coordinates, 10) # Change 10 to the desired radius in kilometers

    # Render the listings in ascending order of distance
    @nearby_listings = @listings.sort_by { |listing| listing.distance_to(user_coordinates) }
    @other_listings = Listing.all - @nearby_listings
    @listings = nil

    else
      @listings = Listing.all
    end

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @user }

    end
  end

  # def set_user
  #   @user = current_user
  # end
end
