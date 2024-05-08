class Listing < ApplicationRecord
  belongs_to :profile, dependent: :destroy
  has_one_attached :primary_image
  has_one_attached :additional_image_1
  has_one_attached :additional_image_2
  has_one_attached :upi_qr_code

  geocoded_by :address

end
