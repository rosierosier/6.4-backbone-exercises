console.log('Hello Views A');

var handlebars = require('handlebars');
var $ = require('jquery');
var handlebars = require('handlebars');
var Backbone = require('backbone');
var models = require('../models/blog');
var _ = require('underscore');

var Blog = Backbone.View.extend({
  // tagName: "form",
  // template: handlebars.compile($('#address-book').html()),
  // events: {
  // },
  initialize: function(){
    this.listenTo(this.collection, "add", this.render);
  },
  complete: function(){
  },

  render: function(contact){
    console.log('rendering');
    this.$el.empty().append(this.template(contact.toJSON()));
    return this;
  }
});
