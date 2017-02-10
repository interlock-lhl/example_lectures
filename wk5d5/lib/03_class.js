'use strict';

class User {
  constructor(first, last) {

  }
  isAdmin() { return false}
}

User.classMethod = () => {

}

class Admin extends User {

  isAdmin() { return true }
}
