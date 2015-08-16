Webspinr.Views.Site = Backbone.CompositeView.extend({
  model: Webspinr.Models.Site,
  template: JST["sites/site"],
  className: 'site',
  events: {

  },

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.addPageView);
    this.listenTo(this.model, "sync", this.render);
    this.pageName = options.pageName;
  },

  addPageView: function () {
    var page;
    if (!this.pageName) {
      page = this.model.pages().at(0);
    } else {
      page = this.model.pages().findWhere({ title: this.pageName });
      // page = this.model.pages().get(this.pageId);
      if (!page) {
        alert("page not found");
      }
    }

    var subview = new Webspinr.Views.Page({
      model: page,
      collection: page.elements()
    });
    this.addSubview("#page-container", subview);
  },

  render: function () {
    this.$el.html(this.template({ site: this.model }));
    this.attachSubviews();
    this.onRender();
    return this;
  }
});
