console.log('Hello Models C');

var Backbone = require('backbone');
var handlebars = require('handlebars');

var Reading = Backbone.Model.extend({
  urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/rosieaproject'
});

var ReadingCollection = Backbone.Collection.extend({
  model: Reading,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/rosieaproject'
});

module.exports = {
  'Reading': Reading,
  'ReadingCollection': ReadingCollection
}
