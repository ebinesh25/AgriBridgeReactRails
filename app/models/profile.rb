class Profile < ApplicationRecord
  geocoded_by :address
  belongs_to :user
  has_many :listings, dependent: :destroy

  # after_save :set_lat_lon

  # def set_lat_lon
  #   self.geocode
  #   self.save
  # end

end
