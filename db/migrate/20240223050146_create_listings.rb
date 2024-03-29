class CreateListings < ActiveRecord::Migration[7.1]
  def change
    create_table :listings do |t|
      t.references :profile, null: true, foreign_key: true
      t.string :title
      t.decimal :price_per_unit
      t.text :description
      t.decimal :available_quantity
      t.text :address
      t.float :latitude
      t.float :longitude
      t.string :upi_id
      t.string :upi_number
      t.string :upi_name

      t.timestamps
    end
    add_index :listings, :latitude
    add_index :listings, :longitude
  end
end
