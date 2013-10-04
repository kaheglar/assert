
'use strict';

module.exports = {
  build: {
    files: [
      {
        src: [
          'lib/style.less'
        ],
        dest: 'lib/style.css'
      }
    ]
  },
  options: {
    paths: [
      'lib'
    ]
  }
}
