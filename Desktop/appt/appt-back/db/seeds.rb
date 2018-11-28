apartment_attributes = [
  {
    address: '123 G Street',
    unit: '5b',
    city: 'San Diego',
    zip: 91956,
    state: 'California',
    country: 'USA',
    manager_name: 'Pablo',
    manager_phone_number: '619-765-4321',
    manager_hours: '10am-4pm'
  },
  {
    address: '124 J Street',
    unit: '7',
    city: 'Escondido',
    zip: 91943,
    state: 'California',
    country: 'USA',
    manager_name: 'Marg',
    manager_phone_number: '619-123-4567',
    manager_hours: '12pm-2pm'
  }
]

apartment_attributes.each do |attributes|
  Apartment.create(attributes)
end
