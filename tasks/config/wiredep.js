module.exports = function (grunt) {
    grunt.config.set('wiredep', {
        task: {
            ignorePath: '../assets',
            src: [
                'views/homepage.ejs'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-wiredep');

};