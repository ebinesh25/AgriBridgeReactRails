json.extract! listing, :id, :title, :price_per_unit, :description, :available_quantity, :created_at, :updated_at
json.url listing_url(listing, format: :json)
