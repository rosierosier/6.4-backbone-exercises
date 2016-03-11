console.log("Hello World C!");
var handlebars = require('handlebars');
var $ = require('jquery');
var Backbone = require('backbone');

var views = require('./views/reading');
var models = require('./models/reading');
console.log('hi');


$(function(){
  var readingBlog = new models.ReadingCollection();
  var sidebarView = new views.ReadingSidebar({collection: readingBlog});
  var readingView = new views.ReadingBlogView({collection: readingBlog});
  console.log('onload function working');

  $('.blog-sidebar')
    .html(sidebarView.render().el);
  $('.blog-reading')
    .append(readingView.render().el);
});
