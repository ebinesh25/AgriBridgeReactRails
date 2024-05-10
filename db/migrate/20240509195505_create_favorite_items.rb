class CreateFavoriteItems < ActiveRecord::Migration[7.1]
  def change
    create_table :favorite_items do |t|
      t.belongs_to :profile, null: false, foreign_key: true
      t.belongs_to :listing, null: false, foreign_key: true

      t.timestamps
    end
  end
end
