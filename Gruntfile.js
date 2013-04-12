module.exports = function(grunt) {

	// Configurações
	grunt.initConfig({
		coffee:{
			dev: {
				expand: true
				,cwd: "js/"
				,src: ["**/*.coffee"]
				,dest: "js/"
				,ext: ".js" 
			}
		},
		imagemin: {
	    	options: {
	    		optimizationLevel: 3
	    	},
	    	dev: {
				expand: true
				,cwd: "img/"
				,src: ["**/*.jpg"]
				,dest: "img/"
				,ext: ".jpg" 
			}
		},		
		
		uglify: {
			dist: {
				files: {
			    	'dist/all.js': 'dist/all.js'
				}
			}
		},
		concat: {
			dist: {
				src: 'js/*.js',
				dest: 'dist/all.js'
			}
		}

	});

	// Plugins
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('default', ['coffee:dev', 'imagemin:dev'])
	grunt.registerTask('dist', ['concat:dist', 'uglify:dist'])
};