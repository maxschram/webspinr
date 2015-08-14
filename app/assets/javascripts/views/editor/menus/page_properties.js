Webspinr.Views.PagePropertiesMenu = Backbone.View.extend({
  template: JST["menus/page_properties"],
  className: 'page-properties-menu',

  initialize: function () {
  },

  events: {
    "click .background-image": "setBackgroundImage"
  },

  setBackgroundImage: function () {
    var imageUrl = prompt("Enter an image url");
    this.model.save({ background_image: "url(" + imageUrl + ")"});
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
