require_relative 'config'

# p Country.all
# all_c = Country.where("population > 10000")
# p all_c

# p all_c.where("population > 1000000")

# all_c = Country.where("population > 35749600")
# p all_c
# p all_c.where(name: 'United States of America')

# p Country.first

# p Country.last

# p Country.limit(2).order('id ASC')

c = Country.first
c.population = c.population + 1
c.population = 'cats'

if c.save
  p "success"
else
  p "failed to save"
  p c.errors
end
