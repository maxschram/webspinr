Webspinr.Views.PagePropertiesMenu = Backbone.View.extend({
  template: JST["menus/page_properties"],
  className: 'page-properties-menu',

  initialize: function () {
  },

  events: {
    "click .background-image": "setBackgroundImage",
    "click .background-color": "setBackgroundColor"
  },

  setBackgroundImage: function () {
    var imageUrl = prompt("Enter an image url");
    this.model.save({ background_image: "url(" + imageUrl + ")"});
  },

  setBackgroundColor: function () {
    var color = prompt("Enter a color");
    this.model.save({ background_color: color });
  },

  render: function () {
    this.$el.html(this.template({ page: this.model }));
    return this;
  }
});
