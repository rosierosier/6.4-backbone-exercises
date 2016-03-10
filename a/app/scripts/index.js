console.log("Hello World A!");
var handlebars = require('handlebars');
var $ = require('jquery');
var Backbone = require('backbone');

var views = require('./views/blog');
var models = require('./models/blog');

console.log('hi !');

$(function(){
  var blog = new models.BlogCollection();
  var blogView = new views.Blog({collection: blog});

  $('.blog-app').html(blogView.render().el);
})
