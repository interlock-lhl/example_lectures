# Wk6d4

Intro to view helpers
 - Why they exist
 - Built-in vs our own
  - always look for a helper already made to solve your view helper problems
  - keep view related code there, no business logic/model code
 - Limitations and Scope

Render tricks
- `render post` will look for a view partial at `views/posts/_post.erb.html`
- `render @posts` will loop over the ActiveRecord collection and do the same as above ^^^

Route helpers
 - \_path are relative urls
 - \_url are absolute urls
 - `rake routes` to see your routes and the prefixes
 - Discussion Modules in Ruby
  - include a module to insert its methods into your controller

Common view helpers that use route helpers
 - link_to
   - how does a link_to(..., method: :delete) work?!??!
   - jquery-ujs looks for the data-method attribute and hooks up an $.ajax call

# Resources

http://guides.rubyonrails.org/action_view_overview.html
