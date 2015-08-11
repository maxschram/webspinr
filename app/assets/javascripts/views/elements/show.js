Webspinr.Views.Element = Backbone.CompositeView.extend({
  template: JST["elements/element"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
    this.render();
  },

  render: function () {
    this.$el.html(this.template({ element: this.model }));
    this.attachSubviews();
    return this;
  }
});
