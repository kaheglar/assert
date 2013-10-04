
'use strict';

define(function () {
  return function assert (condition, message) {
    if(!condition) {
      throw new TypeError(message || 'Assertion failed.')
    }
  }
})
