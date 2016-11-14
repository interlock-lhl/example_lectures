# Bundler and ActiveRecord

- Various ways of finding data in AR
  - `find(:id)`
  - `find_by(name: 'Canada')` returns first matching
  - `where(name: 'Canada')` returns an ActiveRecordCollection
  - `where("population < 10000000")`
- Updating and creating records
  - `new` only create a new Object and does not save it
  - `create` does a new THEN `save`
  - `save` will save any updates you have done, if any
  - `save` returns a boolean on success or not, you should handle it ;-) The errors are in `errors`
  - `destroy` will remove the record
- order your result with `order()`
- you can use `limit()` and `offset()` as well
- aggregation is also possible
  - sum/avg/count/etc




_Schema and seed stolen... err... borrowed from Don_
