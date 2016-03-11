console.log("Hello World B!");
var handlebars = require('handlebars');
var $ = require('jquery');
var Backbone = require('backbone');

var views = require('./views/person');
var models = require('./models/person');

$(function(){
  var person = new models.PersonCollection();
  var personView = new views.PersonView({collection: person});

  $('.person-app').html(personView.render().el);
})
