require_relative 'config'

# p City.where('population > ?', 12)

# p Country.find_by(name: 'Canada').cities.average(:population).to_s

# Country.find_by(name: 'United States of America').cities << City.new( name: 'Denver', population: '10000000')
# Country.find_by(name: 'United States of America').cities << City.new( name: 'Blaine', population: '10000')

r = City.group(:country).average(:population)

r.each { |key, value|
  puts "Country: #{key.name} Avg Pop: #{value}"
}
