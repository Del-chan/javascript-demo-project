// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;

var myApp = require('.app/library.js');

describe("Test for proper arithmetic functionality", function() {
  it("should return Y as average for A, B, C", function() {
    assert(myApp.computeAverage(A,B,C) == Y);
  })
  it("should return Y as average for A, B, C", function() {
    assert(myApp.computeAverage(A,B,C) == Y);
  })
  it("should return Y as factorial for X", function() {
    assert(myApp.computeFactorial(X) == Y);
  })
})


describe("Test for temperature conversion functionality", function() {
  it("should return X for Celcius value Y", function() {
    assert(myApp.convertTempCtoF(Y) == X);
  })
  it("should return X for Celcius value Y", function() {
    assert(calendar.convertTempCtoF(Y) == X);
  })
  it("should return Y for Fahrenheit value X", function() {
    assert(calendar.convertTempFtoC(X) == Y);
  })
  it("should return Y for Fahrenheit value X", function() {
    assert(calendar.convertTempFtoC(X) == Y);
  })
})
