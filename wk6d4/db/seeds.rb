# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

post1 = Post.create({
  title: "Kittens!",
  body: "Kittens are soft and friendly and awesome and kittens!",
  published: true,
  comments: [
    Comment.create(who: 'Don', body: 'I AGREE!', moderated: true, accepted: true),
    Comment.create(who: 'James', body: 'I love kittens, but they make me sneeze!', moderated: true, accepted: true)
  ]
})

Post.create({
  title: "How to pet a cats belly",
  body: "You do not pet cats belly.",
  publish: false,
  comments: [
    Comment.create(who: 'David', body: 'I can confirm, do not pet cats belly', moderated: true, accepted: true),
    Comment.create(who: 'Trump', body: 'We can build a better cat! Make cats great again!', moderated: true, accepted: false)
  ]
})
