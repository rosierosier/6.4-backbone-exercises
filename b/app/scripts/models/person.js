console.log('Hello Person B');
var handlebars = require('handlebars');
var $ = require('jquery');
var Backbone = require('backbone');

var Person = Backbone.Model.extend({

});

var PersonCollection = Backbone.Collection.extend({
  model: Person,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/rosiebproject"
});

module.exports = {
  'Person': Person,
  'PersonCollection': PersonCollection
}
