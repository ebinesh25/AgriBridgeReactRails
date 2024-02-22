require "test_helper"

class BusinessOwnerProfilesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @business_owner_profile = business_owner_profiles(:one)
  end

  test "should get index" do
    get business_owner_profiles_url
    assert_response :success
  end

  test "should get new" do
    get new_business_owner_profile_url
    assert_response :success
  end

  test "should create business_owner_profile" do
    assert_difference("BusinessOwnerProfile.count") do
      post business_owner_profiles_url, params: { business_owner_profile: { Addr1: @business_owner_profile.Addr1, Addr2: @business_owner_profile.Addr2, Country: @business_owner_profile.Country, District: @business_owner_profile.District, State: @business_owner_profile.State, Taluk: @business_owner_profile.Taluk, company_name: @business_owner_profile.company_name, lister_designation: @business_owner_profile.lister_designation, lister_name: @business_owner_profile.lister_name, phone: @business_owner_profile.phone, user_id: @business_owner_profile.user_id } }
    end

    assert_redirected_to business_owner_profile_url(BusinessOwnerProfile.last)
  end

  test "should show business_owner_profile" do
    get business_owner_profile_url(@business_owner_profile)
    assert_response :success
  end

  test "should get edit" do
    get edit_business_owner_profile_url(@business_owner_profile)
    assert_response :success
  end

  test "should update business_owner_profile" do
    patch business_owner_profile_url(@business_owner_profile), params: { business_owner_profile: { Addr1: @business_owner_profile.Addr1, Addr2: @business_owner_profile.Addr2, Country: @business_owner_profile.Country, District: @business_owner_profile.District, State: @business_owner_profile.State, Taluk: @business_owner_profile.Taluk, company_name: @business_owner_profile.company_name, lister_designation: @business_owner_profile.lister_designation, lister_name: @business_owner_profile.lister_name, phone: @business_owner_profile.phone, user_id: @business_owner_profile.user_id } }
    assert_redirected_to business_owner_profile_url(@business_owner_profile)
  end

  test "should destroy business_owner_profile" do
    assert_difference("BusinessOwnerProfile.count", -1) do
      delete business_owner_profile_url(@business_owner_profile)
    end

    assert_redirected_to business_owner_profiles_url
  end
end
