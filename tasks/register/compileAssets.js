module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
        'wiredep',
		'jst:dev',
		'less:dev',
        'ngtemplates',
		'copy:dev',
		'coffee:dev',
	]);
};
