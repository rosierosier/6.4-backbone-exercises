console.log("Hello World A!");
var handlebars = require('handlebars');
var $ = require('jquery');
var Backbone = require('backbone');

var Blog = require('./views/blog');
var models = require('./models/blog');

console.log('hi');

var blog = new models.BlogCollection();
var blogView = new Blog({collection: blogs});

$('#submit-button').on('click', function(e){
  e.preventDefault();
  console.log('button-working');
  var title = $('#title').val();
  var blog = $('#blog').val();
  var blogInfo = {'title': title, 'blog': blog};
  console.log(blogInfo);
  blog.input(blogInfo);
  // console.log(blog);
});
