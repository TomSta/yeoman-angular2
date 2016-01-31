'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

_initializing: function () {
    console.log("initializing");    
 },  

 prompting: function () {
    console.log("prompting");
 },

 configuring: function () {
    console.log("configuring"); 
 },
 
_default: function () {
    console.log("default"); 
 },

 
_writing: function () {
   console.log("writing");
 },

 
_conflicts: function () {
  console.log("conflicts?"); 
 },

 
 install: function () {
   console.log("install");
 },

 end: function () {
   console.log("end");
 }
});


