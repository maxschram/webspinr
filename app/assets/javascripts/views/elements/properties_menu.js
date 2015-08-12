Webspinr.Views.ElementPropertiesMenu = Backbone.CompositeView.extend({
  template: JST["elements/properties_menu"],

  events: {
    "click .delete": "deleteElement"
  },

  deleteElement: function () {
    this.model.destroy();
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
