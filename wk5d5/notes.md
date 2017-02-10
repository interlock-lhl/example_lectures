
# Paradigms

## Functional

### callbacks

```js
[1,2,3].forEach(function(item) {
  console.log(item);
});
```

### Closures

```js
function validateInput(input, validatorFn) {
  $(input).on('change', () => {
    validatorFn(input, input.value);
  });

  $(input).on('blur', () = {
    validatorFn(input, input.value);
  });
}
```

## Object Oriented Programming
 - represent entities involved in code
   ```text
   A User or Customer
   Products
   An album
   ```
 - grouping of data and functionality
   ```text
   A User who has data: name, email, password, date of birth, etc
   A Product that can be purchased, is it in stock, etc.
   ```
 - Can be layered with 'inheritance' to extend existing classes
   ```text
   A Customer may build on the User, adding extra data and functionality like:
   - orders they have done
   - current shopping cart
   - process an orders
   ```

# Properties

- own properties
  ```js
  const data = [
    firstName: 'James',
    lastName: 'Sapara',
    email: 'james.sapara@lhl.ca'
  };
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
  console.log(Object.getOwnPropertyNames(myObj));
  ```
- enumerable vs none enumerable properties https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
  ```js
  console.log(myObj.propertyIsEnumerable('firstName'));
  const objs = [myObj];
  console.log(objs.propertyIsEnumerable(0));
  ```
- Object.keys https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  ```js
  console.log(Object.keys(myObj));
  ```
- Object.prototype.hasOwnProperty https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
  ```js
  console.log(myObj.hasOwnProperty('firstName'));
  console.log(myObj.hasOwnProperty('toString'));
  ```

More about properties can be found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

You may want to add properties that are not enumerable for example.

# Prototypes

## setPrototypeOf https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf

## chain and lookup

## getPrototypeOf https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf

# Constructors

- constructor functions
- new keyword
- inheritance via prototype
- instanceof
- constuctor properties

# Classes and Instances

- Classes are light blueprints
- Instances are constructed from the blueprint "constructor" function
- By convention, classes start with a Capital letter
- `new` is the keyword we use to take a Class and make an instance
 - can also do it in a functional way with Object.create();
- messing with `.prototype` on built-in classes
- prototypes hold instance methods


https://developer.mozilla.org/en/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
