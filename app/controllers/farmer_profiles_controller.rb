class FarmerProfilesController < ApplicationController
  before_action :set_farmer_profile, only: %i[ show edit update destroy ]

  # GET /farmer_profiles or /farmer_profiles.json
  def index
    @farmer_profiles = FarmerProfile.all
  end

  # GET /farmer_profiles/1 or /farmer_profiles/1.json
  def show
  end

  # GET /farmer_profiles/new
  def new
    @farmer_profile = FarmerProfile.new
  end

  # GET /farmer_profiles/1/edit
  def edit
  end

  # POST /farmer_profiles or /farmer_profiles.json
  def create
    @farmer_profile = FarmerProfile.new(farmer_profile_params)

    respond_to do |format|
      if @farmer_profile.save
        format.html { redirect_to farmer_profile_url(@farmer_profile), notice: "Farmer profile was successfully created." }
        format.json { render :show, status: :created, location: @farmer_profile }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @farmer_profile.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /farmer_profiles/1 or /farmer_profiles/1.json
  def update
    respond_to do |format|
      if @farmer_profile.update(farmer_profile_params)
        format.html { redirect_to farmer_profile_url(@farmer_profile), notice: "Farmer profile was successfully updated." }
        format.json { render :show, status: :ok, location: @farmer_profile }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @farmer_profile.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /farmer_profiles/1 or /farmer_profiles/1.json
  def destroy
    @farmer_profile.destroy!

    respond_to do |format|
      format.html { redirect_to farmer_profiles_url, notice: "Farmer profile was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_farmer_profile
      @farmer_profile = FarmerProfile.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def farmer_profile_params
      params.require(:farmer_profile).permit(:name, :Addr1, :Addr2, :Taluk, :District, :State, :Country, :phone, :user_id)
    end
end
