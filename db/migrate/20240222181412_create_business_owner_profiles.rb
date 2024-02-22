class CreateBusinessOwnerProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :business_owner_profiles do |t|
      t.string :lister_name
      t.string :lister_designation
      t.string :company_name
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
