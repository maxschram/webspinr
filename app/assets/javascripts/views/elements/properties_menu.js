Webspinr.Views.ElementPropertiesMenu = Backbone.CompositeView.extend({
  template: JST["elements/properties_menu"],
  className: 'menu',

  events: {
    "click .delete": "deleteElement",
    "click .color": "changeColor"
  },

  deleteElement: function () {
    this.model.destroy();
  },

  changeColor: function () {
    var color = prompt("Enter a color"); //TODO: Replace with colorpicker
    // if (this.model.get("tag") === "div") {
      // add class and add color in css file
    // }
    this.model.save("color", color);
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  onRender: function () {
    debugger;
  }
});
