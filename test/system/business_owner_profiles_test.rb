require "application_system_test_case"

class BusinessOwnerProfilesTest < ApplicationSystemTestCase
  setup do
    @business_owner_profile = business_owner_profiles(:one)
  end

  test "visiting the index" do
    visit business_owner_profiles_url
    assert_selector "h1", text: "Business owner profiles"
  end

  test "should create business owner profile" do
    visit business_owner_profiles_url
    click_on "New business owner profile"

    fill_in "Addr1", with: @business_owner_profile.Addr1
    fill_in "Addr2", with: @business_owner_profile.Addr2
    fill_in "Country", with: @business_owner_profile.Country
    fill_in "District", with: @business_owner_profile.District
    fill_in "State", with: @business_owner_profile.State
    fill_in "Taluk", with: @business_owner_profile.Taluk
    fill_in "Company name", with: @business_owner_profile.company_name
    fill_in "Lister designation", with: @business_owner_profile.lister_designation
    fill_in "Lister name", with: @business_owner_profile.lister_name
    fill_in "Phone", with: @business_owner_profile.phone
    fill_in "User", with: @business_owner_profile.user_id
    click_on "Create Business owner profile"

    assert_text "Business owner profile was successfully created"
    click_on "Back"
  end

  test "should update Business owner profile" do
    visit business_owner_profile_url(@business_owner_profile)
    click_on "Edit this business owner profile", match: :first

    fill_in "Addr1", with: @business_owner_profile.Addr1
    fill_in "Addr2", with: @business_owner_profile.Addr2
    fill_in "Country", with: @business_owner_profile.Country
    fill_in "District", with: @business_owner_profile.District
    fill_in "State", with: @business_owner_profile.State
    fill_in "Taluk", with: @business_owner_profile.Taluk
    fill_in "Company name", with: @business_owner_profile.company_name
    fill_in "Lister designation", with: @business_owner_profile.lister_designation
    fill_in "Lister name", with: @business_owner_profile.lister_name
    fill_in "Phone", with: @business_owner_profile.phone
    fill_in "User", with: @business_owner_profile.user_id
    click_on "Update Business owner profile"

    assert_text "Business owner profile was successfully updated"
    click_on "Back"
  end

  test "should destroy Business owner profile" do
    visit business_owner_profile_url(@business_owner_profile)
    click_on "Destroy this business owner profile", match: :first

    assert_text "Business owner profile was successfully destroyed"
  end
end
