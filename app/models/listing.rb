class Listing < ApplicationRecord
  belongs_to :profile
  has_one_attached :primary_image, dependent: :destroy
  has_one_attached :additional_image_1, dependent: :destroy
  has_one_attached :additional_image_2, dependent: :destroy
  has_one_attached :upi_qr_code, dependent: :destroy

  geocoded_by :address
  after_validation :geocode

end
