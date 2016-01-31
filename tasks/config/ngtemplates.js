module.exports = function (grunt) {

    grunt.config.set('ngtemplates', {
        app: {
            cwd: 'assets/app/modules',
            src: '**/*.tpl.html',
            dest: 'assets/app/modules/template/template.module.js',
            options: {
                module: 'app.template',
                standalone: true,

            }
        }
    });

    grunt.loadNpmTasks('grunt-angular-templates');
};