class HomeController < ApplicationController
  # before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def index
    @user = current_user

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @user }
    end

  end
end
rails g scaffold BusinessOwnerProfile lister_name lister_designation company_name Addr1:text Addr2:text Taluk District State Country phone user:references
