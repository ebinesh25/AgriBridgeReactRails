json.partial! "home/listings", listing: @listing
json.user do 
    json.name @profile.lister_name
    json.phone @profile.phone
    json.designation @profile.lister_designation
    json.profile_url profile_path(@profile)
end 
json.recommendations do
    json.array! @recommended_listings, partial: 'home/listings', as: :listing
end