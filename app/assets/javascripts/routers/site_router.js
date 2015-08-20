Webspinr.Routers.SiteRouter = Backbone.Router.extend({

  routes: {
    "": "showSite"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.siteId = options.siteId;
    this.pageName = options.pageName;
  },

  showSite: function () {
    var site = new Webspinr.Models.Site({ id: this.siteId });
    site.fetch();
    var view = new Webspinr.Views.Site({ model: site, pageName: this.pageName });
    this._swapView(view);
  },

  _swapView: function (view) {
    if (this._view) {
      this._view.remove();
    }

    this.$rootEl.html(view.$el);
    view.render();
  }
});
