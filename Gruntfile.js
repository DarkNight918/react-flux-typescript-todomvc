/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // TypeScript
    ts: {
      build: {
        src: ['src/**/*.ts'],
        outDir: 'build/',
        options: {
          module: 'commonjs',
          target: 'es5',
          sourceMap: false,
          declaration: false,
          removeComments: false
        }
      }
    },

    // TSD packages
    tsd: {
      refresh: {
        command: 'reinstall',
        latest: true,
        config: './tsd.json'
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-tsd');

  // Default task.
  grunt.registerTask('default', ['ts:build']);

};
