json.extract! listing, :title, :price_per_unit, :available_quantity, :address, :description
json.distance listing.distance_to(@user_coordinates, :km)
json.cost listing.price_per_unit * listing.available_quantity
json.url listing_path(listing)
json.thumbnail request.base_url + url_for(listing.primary_image) if listing.primary_image.attached?

json.images do
  json.array! [
    (request.base_url + url_for(listing.primary_image) if listing.primary_image.attached?),
    (request.base_url + url_for(listing.additional_image_1) if listing.additional_image_1.attached?),
    (request.base_url + url_for(listing.additional_image_2) if listing.additional_image_2.attached?)
  ].compact
end