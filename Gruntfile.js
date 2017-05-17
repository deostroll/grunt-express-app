var app = require('./app');

module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          livereload: true,
          middleware: [app],
          port: 3002,
          hostname: 'localhost'
        }
      }
    },
    watch: {
      dev: {
        files: ['public/**/*.{html,js,css}'],
        options: {
          livereload: '<%= connect.server.options.livereload %>'
        }
      },
      express: {
        files: ['*.js', '!Gruntfile.js'],
        tasks: ['connect'],
        options: {
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'watch']);
}
