class Listing < ApplicationRecord
  belongs_to :user
  has_one_attached :primary_image
  has_one_attached :additional_image_1
  has_one_attached :additional_image_2
end
