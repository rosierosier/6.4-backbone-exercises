console.log('Hello Person B');

var handlebars = require('handlebars');
var $ = require('jquery');
var handlebars = require('handlebars');
var Backbone = require('backbone');
var models = require('../models/blog');
var _ = require('underscore');

var formTemplate = require('../../templates/person.hbs');

var PersonView = Backbone.View.extend({
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
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var address = $('#address').val();
    var phone = $('#phone').val();
    var personInfo = {'firstName': firstName, 'lastName': lastName, 'address': address, 'phone': phone};
    console.log(personInfo);
    console.log(this.collection);
    this.collection.create(personInfo)
  },
  render: function(contact){
    console.log('rendering');
    this.$el.html(this.template());
    return this;
  }
});

module.exports = {
  'PersonView': PersonView,
}
