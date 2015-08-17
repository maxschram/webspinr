Webspinr.Views.PagePropertiesMenu = Backbone.CompositeView.extend({
  template: JST["menus/page_properties"],
  className: 'page-properties-menu',

  initialize: function () {
  },

  events: {
    "click .background-image": "setBackgroundImage",
    "click .background-color": "setBackgroundColor",
    "submit form": "setTitle",
    "blur #title": "setTitle",
    "click .save-color": "setColor",
    "blur .save-color": "removeColorpicker",
    "mouseleave .colorpicker": "removeColorpicker"
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

    var colorpicker = new Webspinr.Views.Colorpicker ({
      model: this.model,
      callback: this.setColor.bind(this)
    });
    this._colorpicker = colorpicker;
    colorpicker.render();
    this.$(".save-color").focus();
    this.$el.append(colorpicker.$el);
    // var color = prompt("Enter a color");
    // this.model.save({ background_color: color });
  },

  setColor: function (color) {
    this.model.save({ background_color: color });
    this.removeColorpicker();
  },

  removeColorpicker: function () {
    this._colorpicker.remove();
  },

  render: function () {
    this.$el.html(this.template({ page: this.model }));
    return this;
  }
});
