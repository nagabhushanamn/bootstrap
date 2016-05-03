/**
 * http://usejsdoc.org/
 */

module.exports = function(grunt) {

	// grunt.registerTask('speak', function() {
	// console.log('im speaking...');
	// });
	//
	// grunt.registerTask('laugh', function() {
	// console.log('im laughing...');
	// });
	//
	// grunt.registerTask('default', [ 'speak', 'laugh' ]);

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
		less : {
			development : {
				files : {
					'css/styles.css' : 'css/styles.less'
				}
			}
		},
		concat : {
			css : {
				src : [ 'css/styles.css', 'css/theme.css' ],
				dest : 'dist/css/app.css',
			},
			js : {
				src : [ 'js/**/*.js' ],
				dest : 'dist/js/app.js',
			},
		},
		uglify : {
			my_target : {
				files : {
					'dist/js/app.min.js' : [ 'dist/js/app.js' ]
				}
			}
		},
		watch : {
			lesswatch : {
				files : [ 'css/*.less' ],
				tasks : [ 'less', 'concat:css' ],
			},
			jswatch : {
				files : [ 'js/*.js' ],
				tasks : [ 'concat:js', 'uglify' ],
			},
		},

	});

	grunt.registerTask('default', [ 'less', 'concat', 'uglify', 'watch' ]);

};
