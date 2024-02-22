json.extract! business_owner_profile, :id, :lister_name, :lister_designation, :company_name, :Addr1, :Addr2, :Taluk, :District, :State, :Country, :phone, :user_id, :created_at, :updated_at
json.url business_owner_profile_url(business_owner_profile, format: :json)
