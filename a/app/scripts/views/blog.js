console.log('Hello Views A');

var handlebars = require('handlebars');
var $ = require('jquery');
var handlebars = require('handlebars');
var Backbone = require('backbone');
var models = require('../models/blog');
var _ = require('underscore');

var formTemplate = require('../../templates/blog.hbs');

var Blog = Backbone.View.extend({
  tagName: "form",
  template: formTemplate,
  events: {
    "submit": "complete"
  },
  initialize: function(){
    console.log('initialize function');
    this.listenTo(this.collection, "add", this.render);
  },
  complete: function(e){
    e.preventDefault();
    var title = $('#title').val();
    var blog = $('#blog').val();
    var blogInfo = {'title': title, 'blog': blog};
    console.log(blogInfo);
    console.log(this.collection);
    this.collection.create(blogInfo)
  },
  render: function(contact){
    console.log('rendering');
    this.$el.html(this.template());
    return this;
  }
});

module.exports = {
  'Blog': Blog,
}
