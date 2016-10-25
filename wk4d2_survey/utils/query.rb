require 'pg'
# http://www.rubydoc.info/gems/pg/PG/Connection

# http://www.rubydoc.info/gems/pg/PG%2FConnection%3Ainitialize
conn = PG::Connection.open(:host => 'localhost', :user => 'jamessapara', :dbname => 'quizes')

res = conn.exec_params('SELECT * FROM surveys;')
res.each do |row|
  puts row
end
