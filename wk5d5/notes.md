
# Paradigms

- Functional
 - callbacks
 - closures
- Object Oriented Programing
 - represent entities involved in code
 - grouping of data and functionality
 - can be layered with 'inheritance' to extend existing classes

# properties

- objects own properties
- enumerable vs none enumerable properties
 - added via dot or []
 - none enum via Object.definedProperty(obj, key, details);
- Object.keys, Object.prototype.hasOwnProperty
 - keys returns enumerable keys

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

# prototypes

- setPrototypeOf
 - change the prototype of an object
- chain and lookup
 - your object context
 - then the objects prototype (which is an object)
 - repeat on object prototype until null
- getPrototypeOf
 - returns the prototype of an object

# constructors

- constructor functions
 - functions have prototypes
- new keyword
 - a brand new context is created when we use new for use inside the function
- inheritance via prototype
 - We can inherit functionality by assigning prototypes
- instanceof
 - `obj instanceof Object` or `r2d2 instaceof Robot`
- constuctor properties
 - we often set properties in contructor functions, because thats what
 makes our instance unique!

# Classes and Instances

- Classes are light blueprints
- Instances are constructed from the blueprint "constructor" function
- By convention, classes start with a Capital letter
- `new` is the keyword we use to take a Class and make an instance
 - can also do it in a functional way with Object.create();
- `__proto__` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
- messing with `.prototype` on built-in classes is discouraged
- prototypes ideally hold instance methods


https://developer.mozilla.org/en/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
