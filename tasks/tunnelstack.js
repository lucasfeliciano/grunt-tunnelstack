'use strict';

module.exports = function tunnelstack (grunt) {
  var BrowserStackTunnel = require('browserstacktunnel-wrapper');

  var tunnel = {};

  grunt.registerTask('tunnelstack', function(){
    var done = this.async();

    tunnel = new BrowserStackTunnel(this.options());

    tunnel.start(function(error) {
      console.error(error);
      if (error) {
        console.log(error);
        done(error);
      } else {
        console.log('Tunnel Up');
        done();
      }
    });
  });

  grunt.registerTask('tunnelstack:stop', function(){
    var done = this.async();
    tunnel.stop(function(error) {
      if (error) {
        console.log(error);
        done(error);
      } else {
        console.log('Tunnel Down');
        done();
      }
    });
  });
};
