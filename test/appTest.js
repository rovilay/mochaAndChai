const assert = require('chai').assert; // bring in the assertion library
const app = require('../app'); // bring in app.js

// the test suite
describe('App', function() {
  it('app.sayHello() should return hello', function() {
    let result = app.sayHello(); // good practice to use result variable
    assert.equal(result, 'hello');
  });

  it('app.sayHello should return a string', function() {
    let result = app.sayHello();
    assert.typeOf(result, 'string');
  });

  it('app.addNumbers should be above five', function() {
    let result = app.addNumbers(4, 7);
    assert.isAbove(result, 5);
  });

  it('app.addNumbers should return number', function() {
    let result = app.addNumbers(2, 2);
    assert.typeOf(result, 'number');
  });
});