<<<<<<< HEAD
### Persistence

### What is it?



### CSV file

eg
```CSV
id,title,done
1,Lecture,false
2,Email Someone,false
3,"Drop Son off a daycare, and drive to work",true
```

```javascript
var csv_data = [
  ['id','title','done'],
  ['1','Lecture','false']
]
```

pros

- fairly fast dev
- human readable and editable
- simple
- quick to process, small sets of data

cons

- large CSV are inefficent
- no useful data science
- Not ACID compliant
- use memory


### JSON file

eg.

see `default_todos.json`

pros

- human readable and editable
- more structured csv
- types
- simple with libs `JSON.stringify` `JSON.parse`

cons

- no ACID
- still the whole file in to memory

=======
### Persistance

### What is it?

### CSV file

eg

pros/cons

### JSON file

eg

pros/cons
>>>>>>> master

### How would we work with in memory data like JSON for find, insert and delete?


<<<<<<< HEAD

=======
>>>>>>> master
### In come databases

http://db-engines.com/en/ranking

### MongoDB, JSON objects that stick around

Database -> Collections -> Documents

<<<<<<< HEAD
### Database

- service
- many database on the same service
- speaks a protocol, but we generally use the library (mongodb)
- async
- client is our web app server

### Collections

- array of documents
- database have many Collections
- have a name `users` or `todos`

### Document
- freeform json/js object
=======
>>>>>>> master

### Handy shell

https://docs.mongodb.com/manual/mongo/
