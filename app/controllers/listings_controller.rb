class ListingsController < ApplicationController
  before_action :set_listing, only: %i[ show edit update destroy ]
  before_action :set_profile, expect: %i[ index show ]

  # GET /listings or /listings.json
  def index
    if params[:user_id].present?
      @user = User.find(params[:user_id])
      nearby_listings = Listing.near([@user.latitude, @user.longitude])
      other_listings = Listing.where.not(id: nearby_listings.pluck(:id))
      @listings = nearby_listings + other_listings
    else
      @listings = Listing.all
    end
  end

  # GET /listings/1 or /listings/1.json
  def show
  end

  # GET /listings/new
  def new
    @listing = @profile.listings.build
  end

  # GET /listings/1/edit
  def edit
  end

  # POST /listings or /listings.json
  def create
    @listing = @profile.listings.build(listing_params)
    @listing.address = @profile.address
    @listing.geocode
    byebug
    respond_to do |format|
      if @listing.save
        format.html { redirect_to listing_url(@listing), notice: "Listing was successfully created." }
        format.json { render :show, status: :created, location: @listing }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @listing.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /listings/1 or /listings/1.json
  def update
    respond_to do |format|
      if @listing.update(listing_params)
        format.html { redirect_to listing_url(@listing), notice: "Listing was successfully updated." }
        format.json { render :show, status: :ok, location: @listing }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @listing.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /listings/1 or /listings/1.json
  def destroy
    @listing.destroy!

    respond_to do |format|
      format.html { redirect_to listings_url, notice: "Listing was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_listing
      @listing = current_user.profile.listings.find(params[:id])
      # listings
    end

    def set_profile
      @profile = current_user.profile
    end

    # Only allow a list of trusted parameters through.
    def listing_params
      params.require(:listing).permit(:title, :price_per_unit, :description, :available_quantity,
                                      :primary_image, :additional_image_1, :additional_image_2,
                                      :upi_id, :upi_name, :upi_number, :upi_qr_code)
    end
end
