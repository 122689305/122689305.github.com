// Generated by CoffeeScript 1.9.1
(function() {
  module.exports = function(grunt) {
    grunt.initConfig({
      coffee: {
        build: {
          options: {
            bare: false,
            sourceMap: true
          },
          files: {
            'dist/jquery.logosDistort.js': 'src/jquery.logosDistort.coffee'
          }
        }
      },
      compass: {
        build: {
          options: {
            sourcemap: true,
            sassDir: 'demo/assets/_scss',
            cssDir: 'demo/assets/css',
            environment: 'development',
            outputStyle: 'expanded'
          }
        }
      },
      uglify: {
        build: {
          options: {
            mangle: true,
            sourceMap: true,
            compress: {
              drop_console: true
            }
          },
          files: {
            'dist/jquery.logosDistort.min.js': 'src/jquery.logosDistort.js'
          }
        }
      },
      cssmin: {
        build: {
          options: {
            sourceMap: true,
            advanced: false,
            compatibility: true,
            processImport: false,
            shorthandCompacting: false
          },
          files: [
            {
              expand: true,
              cwd: 'demo/assets/css',
              src: ['*.css', '!*.min.css', '!style.css'],
              dest: 'dist/css',
              ext: '.min.css'
            }
          ]
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    return grunt.registerTask('build', ['compass:build', 'uglify:build', 'cssmin:build']);
  };

}).call(this);

//# sourceMappingURL=Gruntfile.js.map
