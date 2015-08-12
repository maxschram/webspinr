Webspinr.Views.Site = Backbone.CompositeView.extend({
  model: Webspinr.Models.Site,
  template: JST["sites/site"],
  events: {

  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.addPageView);
    this.listenTo(this.model, "sync", this.render);
  },

  addPageView: function () {
    var page = this.model.pages().models[0];
    var subview = new Webspinr.Views.Page({
      model: page,
      collection: page.elements()
    });
    this.addSubview("#page", subview);
  },

  render: function () {
    this.$el.html(this.template({ site: this.model }));
    this.attachSubviews();
    this.onRender();
    return this;
  }
});
