require "test_helper"

class FarmerProfilesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @farmer_profile = farmer_profiles(:one)
  end

  test "should get index" do
    get farmer_profiles_url
    assert_response :success
  end

  test "should get new" do
    get new_farmer_profile_url
    assert_response :success
  end

  test "should create farmer_profile" do
    assert_difference("FarmerProfile.count") do
      post farmer_profiles_url, params: { farmer_profile: { Addr1: @farmer_profile.Addr1, Addr2: @farmer_profile.Addr2, Country: @farmer_profile.Country, District: @farmer_profile.District, State: @farmer_profile.State, Taluk: @farmer_profile.Taluk, name: @farmer_profile.name, phone: @farmer_profile.phone, user_id: @farmer_profile.user_id } }
    end

    assert_redirected_to farmer_profile_url(FarmerProfile.last)
  end

  test "should show farmer_profile" do
    get farmer_profile_url(@farmer_profile)
    assert_response :success
  end

  test "should get edit" do
    get edit_farmer_profile_url(@farmer_profile)
    assert_response :success
  end

  test "should update farmer_profile" do
    patch farmer_profile_url(@farmer_profile), params: { farmer_profile: { Addr1: @farmer_profile.Addr1, Addr2: @farmer_profile.Addr2, Country: @farmer_profile.Country, District: @farmer_profile.District, State: @farmer_profile.State, Taluk: @farmer_profile.Taluk, name: @farmer_profile.name, phone: @farmer_profile.phone, user_id: @farmer_profile.user_id } }
    assert_redirected_to farmer_profile_url(@farmer_profile)
  end

  test "should destroy farmer_profile" do
    assert_difference("FarmerProfile.count", -1) do
      delete farmer_profile_url(@farmer_profile)
    end

    assert_redirected_to farmer_profiles_url
  end
end
