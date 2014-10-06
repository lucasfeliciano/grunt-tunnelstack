'use strict';

module.exports = function tunnelstack (grunt) {
  var BrowserStackTunnel = require('browserstacktunnel-wrapper');

  grunt.registerTask('tunnelstack:start', function(){

    var browserStackTunnel = new BrowserStackTunnel(this.options);

    var done = this.async();
    browserStackTunnel.start(function(error) {
      if (error) {
        console.log(error);
        done();
      } else {
        console.log('Tunnel Up');
        done();
      }
    });
  });


  grunt.registerTask('tunnelstack:stop', function(){
    var done = this.async();
    browserStackTunnel.stop(function(error) {
      if (error) {
        console.log(error);
        done();
      } else {
        console.log('Tunnel Down');
        done();
      }
    });
  });
};
