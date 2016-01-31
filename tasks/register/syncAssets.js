module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'jst:dev',
		'less:dev',
        'ngtemplates',
		'sync:dev',
		'coffee:dev',
	]);
};
