/**
 * Compiles LESS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/importer.less` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-less
 */
module.exports = function(grunt) {

	grunt.config.set('less', {
		dev: {
			files: {
                //'.tmp/public/styles/bootstrap.css' : 'bower_components/bootstrap/less/bootstrap.less',
                '.tmp/public/styles/importer.css' : 'assets/styles/importer.less'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
};
