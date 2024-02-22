require "application_system_test_case"

class FarmerProfilesTest < ApplicationSystemTestCase
  setup do
    @farmer_profile = farmer_profiles(:one)
  end

  test "visiting the index" do
    visit farmer_profiles_url
    assert_selector "h1", text: "Farmer profiles"
  end

  test "should create farmer profile" do
    visit farmer_profiles_url
    click_on "New farmer profile"

    fill_in "Addr1", with: @farmer_profile.Addr1
    fill_in "Addr2", with: @farmer_profile.Addr2
    fill_in "Country", with: @farmer_profile.Country
    fill_in "District", with: @farmer_profile.District
    fill_in "State", with: @farmer_profile.State
    fill_in "Taluk", with: @farmer_profile.Taluk
    fill_in "Name", with: @farmer_profile.name
    fill_in "Phone", with: @farmer_profile.phone
    fill_in "User", with: @farmer_profile.user_id
    click_on "Create Farmer profile"

    assert_text "Farmer profile was successfully created"
    click_on "Back"
  end

  test "should update Farmer profile" do
    visit farmer_profile_url(@farmer_profile)
    click_on "Edit this farmer profile", match: :first

    fill_in "Addr1", with: @farmer_profile.Addr1
    fill_in "Addr2", with: @farmer_profile.Addr2
    fill_in "Country", with: @farmer_profile.Country
    fill_in "District", with: @farmer_profile.District
    fill_in "State", with: @farmer_profile.State
    fill_in "Taluk", with: @farmer_profile.Taluk
    fill_in "Name", with: @farmer_profile.name
    fill_in "Phone", with: @farmer_profile.phone
    fill_in "User", with: @farmer_profile.user_id
    click_on "Update Farmer profile"

    assert_text "Farmer profile was successfully updated"
    click_on "Back"
  end

  test "should destroy Farmer profile" do
    visit farmer_profile_url(@farmer_profile)
    click_on "Destroy this farmer profile", match: :first

    assert_text "Farmer profile was successfully destroyed"
  end
end
