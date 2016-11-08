require 'active_record'
# require_relative 'country'
# require_relative 'city'

ActiveRecord::Base.establish_connection({
  adapter: 'postgresql',
  database: 'w6d2_oct03'
})

ActiveRecord::Base.logger = Logger.new(STDOUT)
