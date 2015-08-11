Webspinr.Views.EditElement = Backbone.CompositeView.extend({
  template: JST["elements/edit"],

  render: function () {
    this.$el.html(this.template({ element: this.model }));
    this.attachSubviews();
    return this;
  }
});
