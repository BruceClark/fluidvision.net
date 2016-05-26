module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: 'bower_components',

    less: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2
        },
        files: {
          'styles.css': 'assets/styles/manifest.less'
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: 'assets/scripts/*.js',
        dest: 'scripts.js'
      }
    },

    watch: {
      options: {
        spawn: false,
        atBegin: true
      },

      styles: {
        files: 'assets/styles/*.less',
        tasks: 'less'
      },

      js: {
        files: 'assets/**/*.js',
        tasks: 'concat'
      },
    },

    connect: {
      server: {
        options: {
          port: 9002,
          base: '',
          keepalive: false,
          open: 'http://localhost:9002/index.html'
        }
      }
    }
  });

  grunt.registerTask('serve', ['connect', 'watch']);
  grunt.registerTask('default', 'serve');
}