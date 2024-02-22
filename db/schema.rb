# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_02_22_181412) do
  create_table "business_owner_profiles", force: :cascade do |t|
    t.string "lister_name"
    t.string "lister_designation"
    t.string "company_name"
    t.text "Addr1"
    t.text "Addr2"
    t.string "Taluk"
    t.string "District"
    t.string "State"
    t.string "Country"
    t.string "phone"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_business_owner_profiles_on_user_id"
  end

  create_table "farmer_profiles", force: :cascade do |t|
    t.string "name"
    t.text "Addr1"
    t.text "Addr2"
    t.string "Taluk"
    t.string "District"
    t.string "State"
    t.string "Country"
    t.string "phone"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_farmer_profiles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "role", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "phone"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "business_owner_profiles", "users"
  add_foreign_key "farmer_profiles", "users"
end
