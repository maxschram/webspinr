Webspinr.Views.EditSite = Backbone.CompositeView.extend({
  model: Webspinr.Models.Site,
  template: JST["sites/edit"],
  events: {

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

  render: function () {
    this.$el.html(this.template({ site: this.model }));
    this.attachSubviews();
    return this;
  }
});
