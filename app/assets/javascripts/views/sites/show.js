Webspinr.Views.Site = Backbone.CompositeView.extend({
  model: Webspinr.Models.Site,
  template: JST["sites/site"],
  events: {

  },

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.addPageView);
    this.listenTo(this.model, "sync", this.render);
    this.page = options.page;
  },

  addPageView: function () {
    var page;
    if (this.page === "index") {
      page = this.model.pages().at(0);
    } else {
      page = this.model.pages().findWhere({ title: this.page });
      if (!page) { alert("page not found");}
    }

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
