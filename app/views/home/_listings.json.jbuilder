json.extract! listing, :title, :price_per_unit, :available_quantity, :address, :description
json.distance listing.distance_to(@user_coordinates, :km)
json.cost listing.price_per_unit * listing.available_quantity
json.url URI.parse(listing_url(listing)).path
json.thumbnail json.url url_for(listing.primary_image) if listing.primary_image.attached?

json.images do
  json.array! do
    json.url url_for(listing.primary_image) if listing.primary_image.attached?
    json.url url_for(listing.additional_image_1) if listing.additional_image_1.attached?
    json.url url_for(listing.additional_image_2) if listing.additional_image_2.attached?
  end
end