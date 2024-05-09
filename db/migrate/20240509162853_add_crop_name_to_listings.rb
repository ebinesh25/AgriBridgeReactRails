class AddCropNameToListings < ActiveRecord::Migration[7.1]
  def change
    add_column :listings, :crop_name, :string
  end
end
