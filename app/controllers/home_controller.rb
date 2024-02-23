class HomeController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def index
    @user = current_user
    @listings = Listing.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @user }
    end
  end
end
