module.exports = function(grunt){
	require('time-grunt')(grunt);
	require('jit-grut')(grunt, {
		useminPrepare: 'grunt-usemin'
	});

	grunt.initConfig({
		sass: {
			dist:{
				files:[{
					expand: true,
					cwd: 'css',
					src: ['*.scss'],
					dest: 'css',
					ext: '.css'
				}]
			}
		},

		copy: {
			html: {
				files:[{
				expand: true,
				dot: true,
				cwd: './',
				src: ['*.html'],
				dest: 'dist'
			  }]
			}
		},

		clean: {
			build: {
				src: ['dist/']
			}
		},

		cssmin: {
			dist: {}
		},

		uglify: {
			dist: {}
		},

		filerev: {
			options: {
				encoding: 'utf8',
				algorithm: 'md5',
				length: 20
			},

			release: {
				files: [{
					src: [
						'dist/js/*.js',
						'dist/css/*.css',
					]
				}]
			}
		},

		concat: {
			options: {
				separator: ';'
			},
			dist: {}
		},

		useminPrepare: {
			foo: {
				dest: 'dist',
				src: ['index.html', 'about.html', 'precios.html', 'contacto.html', 'terms.html']
			},
			options: {
				flow: {
					steps: {
						css: ['cssmin'],
						js: ['uglify']
					},
					post: {
						css: [{
							name: 'cssmin',
							createConfig: function(context, block){
								var generated = context.options.generated;
								generated.options = {
									keepSpecialComments: 0,
									rebase: false
								}
							}
						}]
					}
				}
			}
		},

		watch: {
			files: ['css/*.scss'],
			tasks: ['css']
		},

		usemin: {
			html: ['dist/index.html', 'dist/about.html', 'dist/precios.html', 'dist/contacto.html', 'dist/terms.html'],
			options: {
				assetsDir: ['dist', 'dist/css', 'dist/js']
			}
		},

		browserSync: {
			dev:{
				bsFiles: {
					src: [
						'css/*.css',
						'*.html',
						'js/*.js'
					]
				},

				options: {
					watchTask: true,
					server: {
						baseDir: './'
					}
				}
			}
		},

		imagemin: {
			dynamic: {
				files:[{
					expand: true,
					cwd: './',
					src: 'img/*.{png,gif,jpg,jpeg}',
					dest: 'dist/'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('css', ['sass']);
	grunt.registerTask('default', ['browserSync', 'watch']);
	grunt.registerTask('img:compress', ['imagemin']);
};