'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        clean: {
            yourTarget: { src: ["Protractor/Reports/*.*"] }
        },
        
        jshint: {
            all: [
              'Gruntfile.js',
              //'tasks/*.js',
              //'<%= nodeunit.tests %>',
            ],
            options: { jshintrc: '.jshintrc' },
        },

        http: {
            AngularDemo_service: {
                options: { url: 'http://localhost/AngularTestData' },
                method: 'GET',
                dest: 'Protractor/AngularDemo/TestData/SearchTagData.json'
           },
           Demo2_service: {
              options: { url: 'http://localhost/Angular/TestData' },
               method: 'GET',
               dest: 'Protractor/Demo2/TestData/SearchTagData.json'
           }
        },
        
        // Configuration to be run (and then tested).
        protractor: {
            options: { keepAlive: false },
            AngularDemo_Chrome_Test: {
                configFile: "Protractor/AngularDemo/Conf_Chrome.js",
                options: { webdriverManagerUpdate: false }
            },
            AngularDemo_IE_Test: {
                configFile: "Protractor/AngularDemo/Conf_IE.js",
                options: { webdriverManagerUpdate: false }
            },
            Demo2_Test: {
                configFile: "Protractor/Demo2/Conf.js",
                options: { webdriverManagerUpdate: false }
            }
        },

        concurrent: {
            Protractor_Tests: ['AngularDemo_protractor-chrome', 'AngularDemo_protractor-ie'],
            options: { logConcurrentOutput: true }
        },
    });
    
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-http');
    grunt.loadNpmTasks('grunt-concurrent');

    // Define Tasks
    grunt.registerTask('Prepare', ['clean', 'http:Demo2_service']);

    // required for concurrent runner
    //1st Concurrent Set
    grunt.registerTask('AngularDemo_protractor-chrome', ['protractor:AngularDemo_Chrome_Test']);
    grunt.registerTask('AngularDemo_protractor-ie', ['protractor:AngularDemo_IE_Test']);

    // concurrent runner
    grunt.registerTask('E2E_Conncurrent', ['Prepare', 'concurrent:Protractor_Tests']);

    //linnear Runner
    grunt.registerTask('Demo2', ['clean', 'protractor:Demo2_Test']);

    grunt.registerTask('AngularDemo', [ 'protractor:AngularDemo_Chrome_Test']);

    grunt.registerTask('E2E', ['protractor:Demo2_Test', 'protractor:AngularDemo_Chrome_Test', 'protractor:AngularDemo_IE_Test']);

    // By default, lint and run all tests.
    //grunt.registerTask('default', ['Prepare', 'protractor']);
};
