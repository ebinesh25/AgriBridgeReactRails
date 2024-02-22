class CreateFarmerProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :farmer_profiles do |t|
      t.string :name
      t.text :Addr1
      t.text :Addr2
      t.string :Taluk
      t.string :District
      t.string :State
      t.string :Country
      t.string :phone
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
