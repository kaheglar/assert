
'use strict';

// Dynamically determine test spec files

var tests = Object.keys(window['__karma__'].files).
  filter(function (file) {
    return (/^\/base\/lib\/.*spec\.js$/).test(file)
  }).
  map(function (file) {
    return file.replace(/^\/base\/lib\//, '').replace(/\.js$/, '')
  })

// Configure requirejs for unit testing

require.config({
  baseUrl: '/base/lib',
  callback: window['__karma__'].start,
  deps: tests,
  paths: {
    text: '../bower_components/text/text'
  }
})
