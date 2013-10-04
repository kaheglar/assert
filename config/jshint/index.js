
'use strict';

module.exports = {
  files: [
    'Gruntfile.js',
    'config/{,*/}*.js',
    '!config/karma/config.js',
    'lib/{,*/}*.js',
  ],
  options: {
    jshintrc: '.jshintrc'
  }
}
