module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'work/hubthemes/ovation/custom/styles/sass',
          src: ['**/*.scss'],
          dest: 'work/hubthemes/ovation/custom/page/css',
          ext: '.css'
        }]
      }
    },
    postcss: { // Begin Post CSS Plugin
      options: {
        map: false,
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        src: 'work/hubthemes/ovation/custom/page/css/style.css'
      }
    },
    cssmin: { // Begin CSS Minify Plugin
      target: {
        files: [{
          expand: true,
          cwd: 'work/hubthemes/ovation/custom/page/css',
          src: ['*.css', '!*.min.css'],
          dest: 'work/hubthemes/ovation/custom/page/css',
          ext: '.min.css'
        }]
      }
    },
    uglify: { // Begin JS Uglify Plugin
      build: {
				files: [{
        	expand: true,
					cwd: 'work/hubthemes/ovation/custom/page/js',
        	src: ['*.js', '!*.min.js'],
        	dest: 'work/hubthemes/ovation/custom/page/js',
					ext: '.min.js'
				}],
			}
    },
    watch: { // Compile everything into one task with Watch Plugin
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'postcss', 'cssmin']
      },
      js: {
        files: '**/*.js',
        tasks: ['uglify']
      }
    }
	});

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register Grunt tasks
  grunt.registerTask('default', ['watch']);
};
