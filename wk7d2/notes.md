### Integration Testing

### How it's different from Unit testing

- Often follows a story of how a user would user the suite
- Written as a sequence of interactions with a webpage, not directly testing a controller or model

### Pros and Cons

- Pros
  - Usually fast to write
  - Can match up with user stories really well
  - There are tools for non-technical users to create them (Selenium)
  - Protects you against regressions in the UI
- Cons
  - Often fragile (changes to CSS/markup)
  - Emulating JavaScript in the browser is not great
  - Doesn't tell you if the page is actually usable, just that the right markup exists to use it.

### Tricks / Tips for debugging

- insert breakpoints `byebug` and manually run capybara commands
- inspect and test in Web Inspector first
- work incrementally on large tests


### Resources
- https://thoughtbot.com/upcase/test-driven-rails-resources/capybara.pdf
- http://cheatrags.com/capybara
- http://www.rubydoc.info/github/teamcapybara/capybara/master/Capybara/Session
- http://www.rubydoc.info/github/jnicklas/capybara/Capybara/Node
- https://github.com/stympy/faker

# Setup

- add `gem 'capybara'` to Gemfile
- add `require 'capybara/rspec'` and `require 'capybara/rails'` to rails_helper.rb
