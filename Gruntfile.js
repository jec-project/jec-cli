/*!
 * JEC CLI Gruntfile.js
 * Copyright(c) 2017 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC projects: <https://github.com/pechemann/JEC>
 */

/*
 * Provides tasks for building and testing the jec-cli project.
 */
module.exports = function(grunt) {

  //--> Grunt config initialization:
  grunt.initConfig({});

  //--> Compiles all ".ts" whithin the "src" folder:
  grunt.config("ts", {
    build : {
      src: ["src/**/*.ts"],
      options: {
        module: "commonjs",
        target: "es6",
        sourceMap: false,
        declaration: false,
        removeComments: true,
        preserveConstEnums: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        alwaysStrict: true
      }
    },
    test : {
      src: ["test/**/*.ts", "utils/**/*.ts"],
      options: {
        module: "commonjs",
        target: "es6",
        sourceMap: false,
        declaration: false,
        removeComments: true,
        preserveConstEnums: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        alwaysStrict: true
      }
    }
  });

  //--> Copy tasks:
  grunt.config("copy", {
    //--> Copies all ".js" files from the "src" to the "dist" folder:
    main: {
        cwd: "src",
        src: "**/*.js",
        dest: "dist",
        expand: true
    }
  });
  
  //--> Build the API documentation:
  grunt.config("typedoc", {
    doc: {
      src: "src/",
      options: {
        module: "commonjs",
        target: "ES6",
        out: "docs/api-reference",
        readme: "README.md",
        name: "JEC CLI Project",
        exclude: "**/*Test*.ts"
      }
    }
  });

  //--> Runs Unit Testing:
  grunt.config("mochaTest", {
    test: {
      src: ["test/**/*.js"]
    }
  });

  //--> Imports the TypeScript compilation task:
  grunt.loadNpmTasks('grunt-ts');

  //--> Imports the task used for copying all ".js" files from the "src" to the 
  //    "dist" folder:
  grunt.loadNpmTasks("grunt-contrib-copy");

  //--> Imports the task used for building API documentation:
  grunt.loadNpmTasks('grunt-typedoc');

  //--> Imports the task used for running tests:
  grunt.loadNpmTasks('grunt-mocha-test');
  
  /*!
   * JEC CLI Tasks:
   */

  //--> Task: builds the "jec-cli" project:
  grunt.registerTask("build", ["ts:build", "copy:main"]);

  //--> Task: builds the "jec-cli" API documentation:
  grunt.registerTask("doc", ["typedoc"]);

  //--> Task: builds the "jec-cli" API documentation:
  grunt.registerTask("test", ["ts:test", "mochaTest"]);
}
