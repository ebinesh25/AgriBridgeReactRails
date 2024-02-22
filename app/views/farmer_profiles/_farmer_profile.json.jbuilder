json.extract! farmer_profile, :id, :name, :Addr1, :Addr2, :Taluk, :District, :State, :Country, :phone, :user_id, :created_at, :updated_at
json.url farmer_profile_url(farmer_profile, format: :json)
