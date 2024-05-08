# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
require 'faker'

10.times do
  Listing.create(
    profile_id: Faker::Number.unique.between(from: 1, to: 10), # assuming profiles have IDs from 1 to 10
    title: Faker::Commerce.product_name,
    price_per_unit: Faker::Commerce.price(range: 5..100.0, as_string: false),
    description: Faker::Lorem.paragraph(sentence_count: 3),
    available_quantity: Faker::Number.between(from: 1, to: 100),
    address: "#{Faker::Address.street_address}, #{Faker::Address.city}, Tamil Nadu, India",
    latitude: Faker::Address.latitude,
    longitude: Faker::Address.longitude,
    upi_id: Faker::Alphanumeric.alpha(number: 10),
    upi_number: Faker::PhoneNumber.cell_phone,
    upi_name: Faker::Name.name,
  )
end