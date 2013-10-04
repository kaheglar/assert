
'use strict';

define([
  './main'
], function(assert) {
  describe('Function assert', function () {
    it('is defined.', function () {
      expect(assert).toBeDefined()
    })

    it('throws an error when the condition is falsey', function () {
      expect(assertFn(undefined)).toThrow()
      expect(assertFn(null)).toThrow()
      expect(assertFn(false)).toThrow()
      expect(assertFn(0)).toThrow()
      expect(assertFn('')).toThrow()
    })

    it('does not throw an error when the condition is truthy', function () {
      expect(assertFn(true)).not.toThrow()
      expect(assertFn({})).not.toThrow()
      expect(assertFn(1)).not.toThrow()
      expect(assertFn(' ')).not.toThrow()
    })

    it('the default error message is "Assertion failed."', function () {
      expect(assertFn(undefined)).toThrow('Assertion failed.')
    })

    it('the error message can be specified by the user', function () {
      expect(assertFn(undefined, 'Fail.')).toThrow('Fail.')
    })
  })

  // utility
  function assertFn (condition, message) {
    // return as a closure
    return function () {
      assert(condition, message)
    }
  }
})
