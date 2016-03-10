console.log('Hello Models A');
var handlebars = require('handlebars');
var $ = require('jquery');
var Backbone = require('backbone');

var Blog = Backbone.Model.extend({

});

var BlogCollection = Backbone.Collection.extend({
  model: Blog,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/rosieaproject"
});

module.exports = {
  'Blog': Blog,
  'BlogCollection': BlogCollection
}
