class CreateListings < ActiveRecord::Migration[7.1]
  def change
    create_table :listings do |t|
      t.references :user, null: true, foreign_key: true
      t.string :title
      t.decimal :price_per_unit
      t.text :description
      t.decimal :available_quantity

      t.timestamps
    end
  end
end
