class HomeController < ApplicationController
  skip_before_action :verify_authenticity_token # Skip CSRF for API
  # before_action :authenticate_devise_api_token!
  before_action :authenticate_user! 
  skip_before_action :authenticate_user!, if: :api_request?



  def index

    devise_api_token = current_devise_api_token
    # if devise_api_token
    @user = User.first

      # @user = current_user
    @listings = nil
      
      @profile = @user.profile
      
      if @profile 
        # user_profile = current_user # Assuming you have a way to get the current user
        user_coordinates = [@profile.latitude, @profile.longitude]
        @user_coordinates = user_coordinates
        # Find all listings sorted by distance from the user's profile location
        radius_in_km = 30
        radius_in_miles = radius_in_km / 1.60934
        @all_listings = Listing.near(user_coordinates, radius_in_miles) # Change 10 to the desired radius in kilometers

        # Render the listings in ascending order of distance
        @nearby_listings = @all_listings.sort_by { |listing| listing.distance_to(user_coordinates) }
        # @nearby_listings = @all_listings


        @other_listings = Listing.all - @nearby_listings
        @listings = nil

    else
      @listings = Listing.all
    end

    respond_to do |format|
      format.html { render :index }
      format.json { render 'index', formats: :json }
    end
  end

  def search
    @query = params[:query]
    @listings = Listing.where("title LIKE ?", "%#{@query}%")
    render json: @listings
  end

  private
  def api_request?
    request.format.json?
  end

  # def set_user
  #   @user = current_user
  # end
end
