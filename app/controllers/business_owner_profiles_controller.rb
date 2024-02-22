class BusinessOwnerProfilesController < ApplicationController
  before_action :set_business_owner_profile, only: %i[ show edit update destroy ]

  # GET /business_owner_profiles or /business_owner_profiles.json
  def index
    @business_owner_profiles = BusinessOwnerProfile.all
  end

  # GET /business_owner_profiles/1 or /business_owner_profiles/1.json
  def show
  end

  # GET /business_owner_profiles/new
  def new
    @business_owner_profile = BusinessOwnerProfile.new
  end

  # GET /business_owner_profiles/1/edit
  def edit
  end

  # POST /business_owner_profiles or /business_owner_profiles.json
  def create
    @business_owner_profile = BusinessOwnerProfile.new(business_owner_profile_params)

    respond_to do |format|
      if @business_owner_profile.save
        format.html { redirect_to business_owner_profile_url(@business_owner_profile), notice: "Business owner profile was successfully created." }
        format.json { render :show, status: :created, location: @business_owner_profile }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @business_owner_profile.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /business_owner_profiles/1 or /business_owner_profiles/1.json
  def update
    respond_to do |format|
      if @business_owner_profile.update(business_owner_profile_params)
        format.html { redirect_to business_owner_profile_url(@business_owner_profile), notice: "Business owner profile was successfully updated." }
        format.json { render :show, status: :ok, location: @business_owner_profile }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @business_owner_profile.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /business_owner_profiles/1 or /business_owner_profiles/1.json
  def destroy
    @business_owner_profile.destroy!

    respond_to do |format|
      format.html { redirect_to business_owner_profiles_url, notice: "Business owner profile was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_business_owner_profile
      @business_owner_profile = BusinessOwnerProfile.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def business_owner_profile_params
      params.require(:business_owner_profile).permit(:lister_name, :lister_designation, :company_name, :Addr1, :Addr2, :Taluk, :District, :State, :Country, :phone, :user_id)
    end
end
