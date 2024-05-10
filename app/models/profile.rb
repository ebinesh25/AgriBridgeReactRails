class Profile < ApplicationRecord
  belongs_to :user, dependent: :destroy 
  has_many :listings, dependent: :destroy

  has_many :favorite_items, dependent: :destroy
  has_many :items, through: :favorite_items
  has_many :favorited_by, through: :favorite_items, source: :profile

  geocoded_by :address
  after_validation :geocode, if: :address_changed?


  # after_save :set_lat_lon

  # def set_lat_lon
  #   self.geocode
  #   self.save
  # end

end
