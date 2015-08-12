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

    this.model.set("color", color);
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  onRender: function () {
    debugger;
  }
});
