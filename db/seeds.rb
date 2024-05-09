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

# Array of locations
locations = [
  "Townhall", "Selvapuram", "Rathinapuri", "Tatabad", "Sivananda Colony", "Gandhipuram", "Ukkadam", "Kottaimedu", "Ramnagar", "Sukrawarpettai", 
  "R.S Puram", "Saibaba Colony", "Venkatapuram", "Ponnairajapuram", "Race Course", "Gopalapuram", "Sidhapudur", "Avarampalayam", "Sundakkamuthur", 
  "Podanur", "Karumbukadai", "Sundarapuram", "Kurichi", "Eachanari", "Chettipalayam", "Vellalore", "Kuniyamuthur", "Sugunapuram", "Kovaipudur", 
  "Sokkampudhur", "Thondamuthur", "Madhampatti", "Kuppanur", "", "Ramnathapuram", "Singanallur", "Puliakulam", "Ondipudur", "Varadarajapuram", 
  "Peelamedu", "Meena Estate", "Udayampalayam", "Nanjundapuram", "Nehru Nagar", "Vilankurichi", "Ganapathy", "Cheranmanagar", "Nallampalayam", 
  "Gandhimanagar", "Chinniampalayam", "Sowripalayam", "G.V Residency", "Uppilipalayam", "Perur", "Vadavalli", "Veerakeralam", "Veedapaati", 
  "P.N.Pudur", "Kalveerampalayam", "Karamadai", "Periyanaickenpalayam", "Poochiyur", "RAVATHA KOLLANUR", "Thadagam", "Maruthamalai", "Pannimadai", 
  "Saravanampatti", "Kalapatti", "Keeranatham", "Pachapalayam", "Annur", "Ganesapuram", "Kariampalayam", "Kovilpalayam", "Kurumbapalayam", "Walayar", 
  "K.G Chavadi", "Ettimadai", "Odaiyakulam", "Thirumalayampalayam", "Somanur", "Irugur", "Sulur", "Thondamuthur", "Pooluvapatti", "Veerakeralam", 
  "Karunya Nagar", "Thenkarai", "Narasipuram", "Puthur", "Alanthurai", "Veddapaati", "Kinathukadavu", "Myleripalayam", "Malumichampatti", 
  "Othakalmandapam", "Samathur", "Suleeswaranpatti", "Maddukarai", "Annamalai hills"
]

profile = Profile.last
# Loop to iterate over each element
# locations.each do |location|
3.times do
  profile.listings.create(
    title: Faker::Commerce.product_name,
    price_per_unit: Faker::Commerce.price(range: 5..100.0, as_string: false),
    description: Faker::Lorem.paragraph(sentence_count: 3),
    available_quantity: Faker::Number.between(from: 1, to: 100),
    address: "#{locations.sample}, Coimbatore, Tamil Nadu, India",
    upi_id: Faker::Alphanumeric.alpha(number: 10),
    upi_number: Faker::PhoneNumber.cell_phone,
    upi_name: Faker::Name.name,
  )
end