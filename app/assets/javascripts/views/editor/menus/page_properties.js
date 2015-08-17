Webspinr.Views.PagePropertiesMenu = Backbone.View.extend({
  template: JST["menus/page_properties"],
  className: 'page-properties-menu',

  initialize: function () {
  },

  events: {
    "click .background-image": "setBackgroundImage",
    "click .background-color": "setBackgroundColor",
    "submit form": "setTitle",
    "blur #title": "setTitle"
  },

  setTitle: function (e) {
    e.preventDefault();
    var newTitle = this.$("form").serializeJSON().title;
    this.model.save({title: newTitle});
  },

  setBackgroundImage: function (e) {
    e.preventDefault();
    $(e.currentTarget).blur();
    var imageUrl = prompt("Enter an image url");
    this.model.save({ background_image: "url(" + imageUrl + ")"});
  },

  setBackgroundColor: function (e) {
    e.preventDefault();
    $(e.currentTarget).blur();

    var colorpicker = new Webspinr.Views.Colorpicker ({ model: this.model });
    $("#root").append(colorpicker.render().$el);
    // var color = prompt("Enter a color");
    // this.model.save({ background_color: color });
  },

  render: function () {
    this.$el.html(this.template({ page: this.model }));
    return this;
  }
});
