json.details do 
    json.partial! "profiles/profile", profile: @profile
end
json.created_listings do
     json.partial! "listings/listing", collection: @created_listings
end