# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170508004439) do

  create_table "characters", force: :cascade do |t|
    t.string   "status"
    t.integer  "level"
    t.integer  "xp"
    t.string   "character_class"
    t.string   "race"
    t.string   "alignment"
    t.string   "deity"
    t.string   "size"
    t.integer  "age"
    t.string   "integer"
    t.string   "gender"
    t.integer  "height"
    t.string   "weight"
    t.string   "eyes"
    t.string   "hair"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
