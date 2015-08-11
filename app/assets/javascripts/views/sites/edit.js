Webspinr.Views.EditSite = Backbone.CompositeView.extend({
  model: Webspinr.Models.Site,
  template: JST["sites/edit"],
  events: {
    "click .live": "viewLive"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.addPageView);
    this.listenTo(this.model, "sync", this.render);
  },

  addPageView: function () {
    var page = this.model.pages().models[0];
    var subview = new Webspinr.Views.EditPage({
      model: page,
      collection: page.elements()
    });
    this.addSubview("#page", subview);
  },

  viewLive: function () {
    Backbone.history.navigate("#/sites/" + this.model.id, { trigger: true });
  },

  render: function () {
    this.$el.html(this.template({ site: this.model }));
    this.attachSubviews();
    return this;
  }
});
