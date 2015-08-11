Webspinr.Views.EditElement = Backbone.CompositeView.extend({
  template: JST["elements/edit"],

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
