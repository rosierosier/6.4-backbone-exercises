console.log('Hello Models A');
var handlebars = require('handlebars');
var $ = require('jquery');
var Backbone = require('backbone');

var Blog = Backbone.Model.extend({

});

var BlogCollection = Backbone.Collection.extend({
  model: Blog,
  input: function(data){
    this.add(data);
    console.log(data);
    return data;
  }
});

module.exports = {
  'Blog': Blog,
  'BlogCollection': BlogCollection
}
