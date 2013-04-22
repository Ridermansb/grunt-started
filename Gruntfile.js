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
			options: {
		        banner: '/* <%= copy %> */\n',
		      },
			dist: {
				files: {
			    	'dist/all.js': 'dist/all.js'
				}
			}
		},
		concat: {
			options: {
		        banner: '/* <%= copy %> */\n',
		      },
			dist: {
				src: 'js/*.js',
				dest: 'dist/all.js'
			}
		},

		copy: 'Desenvolvido por Riderman em <%= grunt.template.today("yyyy-mm-dd") %>'

	});

	// Plugins
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('default', ['coffee:dev', 'imagemin:dev'])
	grunt.registerTask('dist', ['concat:dist', 'uglify:dist'])

	// Custom task
	grunt.registerTask('coffee', 'Log coffee compile.', function() {
	  grunt.log.writeln('coffee:' + this.target + ' compiled!');
	});

	grunt.registerTask('custom', 'My custom task', function(arg1, arg2) {
	  grunt.log.writeln('Seu código rodando aqui...');
	  if (arg1)
	  	grunt.log.writeln('Arg1: ' + arg1);
	 if (arg2)
	  	grunt.log.writeln('Arg2: ' + arg2);
	});
};