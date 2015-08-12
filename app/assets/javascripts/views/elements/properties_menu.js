Webspinr.Views.ElementPropertiesMenu = Backbone.CompositeView.extend({
  template: JST["elements/properties_menu"],

  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
