class CreateApartments < ActiveRecord::Migration[5.2]
  def change
    create_table :apartments do |t|
      t.string :address
      t.string :unit
      t.string :city
      t.integer :zip
      t.string :state
      t.string :country
      t.string :manager_name
      t.string :manager_phone_number
      t.string :manager_hours

      t.timestamps
    end
  end
end
