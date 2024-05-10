class Listing < ApplicationRecord
  belongs_to :profile
  has_one_attached :primary_image, dependent: :destroy
  has_one_attached :additional_image_1, dependent: :destroy
  has_one_attached :additional_image_2, dependent: :destroy
  has_one_attached :upi_qr_code, dependent: :destroy

  has_many :favorite_items, dependent: :destroy
  has_many :favorited_by, through: :favorite_items, source: :profile


  geocoded_by :address
  after_validation :geocode

end
