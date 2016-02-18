'use strict';

var fs = require('fs');

// usemin custom step
var useminAutoprefixer = {
    name: 'autoprefixer',
    createConfig: function (context, block) {
        if (block.src.length === 0) {
            return {};
        } else {
            return require('grunt-usemin/lib/config/cssmin').createConfig(context, block) // Reuse cssmins createConfig
        }
    }
};
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.initConfig({
        autoprefixer: {
            // src and dest is configured in a subtask called "generated" by usemin
        },
        clean: {
            dist: ['.tmp']
        },
        watch: {
            sass: {
                files: ['src/main/webapp/**/*.scss'],
                tasks: ['sass']
            }
        },
        sass: {
            dist: {
                files: [{
                        expand: true,
                        cwd: 'src/main/webapp',
                        src: ['*.scss'],
                        dest: 'src/main/webapp',
                        ext: '.css'
                    }]
            }
        },
    });
    grunt.registerTask('default', [
        'clean:dist',
		'sass'
    ]);
};