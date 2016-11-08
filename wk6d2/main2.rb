require_relative 'config'

# p City.all

# c = City.new(name: "Saskatoon", population: 200000, country_id: 1)
#
# c.save

# p City.all

# country = Country.find(1) # get by id
# country = Country.find_by(name: 'Canada')

# country = Country.where(name: 'Canada').first

# p country

# city = City.new(name: 'Victoria', population: 10, country_id: country.id)
# city.save

country = Country.find_by(name: 'Canada')

# p country.cities

# country.cities << City.new(name: 'Edmonton', population: 0)

City.create(name: 'St. Johns', population: 12, country: country)
