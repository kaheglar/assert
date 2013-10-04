
'use strict';

module.exports = {
  source: {
    files: [
      'Gruntfile.js',
      'index.html',
      'lib/{,*/}*',
      'config/{,*/}*'
    ],
    tasks: [
      'clear',
      'build',
      'karma:unit:run'
    ],
    options: {
      livereload: true
    }
  },
  config: {
    files: [
      '*.json',
      '.*'
    ],
    tasks: [
      'clear',
      'warn'
    ]
  }
}
