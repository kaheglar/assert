
'use strict';

module.exports = function (grunt) {

  // load external tasks

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  // initialise grunt

  grunt.initConfig({
    clean:    require('./config/clean'),
    connect:  require('./config/connect'),
    jshint:   require('./config/jshint'),
    less:     require('./config/less'),
    karma:    require('./config/karma'),
    open:     require('./config/open'),
    watch:    require('./config/watch')
  })

  // define grunt tasks

  // lint task

  grunt.registerTask('lint', 'jshint')

  // test task

  grunt.registerTask('test', 'karma:continuous')
  grunt.registerTask('unit', 'karma:unit')

  // build tasks

  grunt.registerTask('build', [
    'lint'
  ])

  // workflow tasks

  grunt.registerTask('dev', [
    'clean',
    'build',
    'unit',
    'watch'
  ])

  // warn task

  grunt.registerTask('warn', function () {
    grunt.fail.warn('The configuration file has changed; you will need to restart grunt and/or reinstall dependencies.')
  })

  // default task

  grunt.registerTask('default', [
    'clean',
    'build',
    'test'
  ])

  // task aliases

  grunt.registerTask('d', 'dev')

}
