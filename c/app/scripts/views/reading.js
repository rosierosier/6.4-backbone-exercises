console.log('Hello Views C');

var Backbone = require('backbone');
var $ = require('jquery');
var handlebars = require('handlebars');

var sidebarTemplate = require('../../templates/blogside.hbs');
var readingTemplate = require('../../templates/blogdisplay.hbs');


$.fn.serializeObject = function(){
  return this.serializeArray().reduce(function(acum, i){
    acum[i.name] = i.value;
    return acum;
  }, {});
};

var ReadingSidebar = Backbone.View.extend({
  // tagName: "ul",
  template: sidebarTemplate,
  events: {
    "click .blog-title": "addReadingView",
  },
  initialize: function(){
    this.collection.fetch().done(function(){
      this.collection.each(function(item){
        $('.blog-title').append('<button>' + item.get('title') + '</button>');
      });
    }.bind(this));
  },
  addReadingView: function(e){
    console.log('addReadingView working');
    e.preventDefault();
    console.log(this.collection);
      this.collection.fetch().done(function(){
        this.collection.each(function(item){
          console.log(item.get('title'));
          console.log(item.get('blog'));
          $('.displayblog').append('<h1>' + item.get('title') + '</h1>' + '<p>' + item.get('blog') + '</p>')
        });
      }.bind(this));
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

var ReadingBlogView = Backbone.View.extend({
  // tagName: "h1",
  template: readingTemplate,
  initialize: function(){
    console.log('initializing function');
    this.listenTo(this.collection, "change:selected", this.render);
  },
  render: function(){
    console.log('render function');
    this.$el.html(this.template());
    return this;
  }
});

module.exports = {
  'ReadingSidebar': ReadingSidebar,
  'ReadingBlogView': ReadingBlogView
}
