Webspinr.Routers.SiteRouter = Backbone.Router.extend({

  routes: {
    "": "showSite",
    ':id': 'showSiteIndex',
    ':id/:pageName': 'showSitePage'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.siteId = options.siteId;
  },

  showSite: function () {
    var site = new Webspinr.Models.Site({ id: this.siteId });
    site.fetch();
    var view = new Webspinr.Views.Site({ model: site});
    this._swapView(view);
  },

  editSitePage: function (id, pageId) {
    var site = new Webspinr.Models.Site({ id: id });
    site.fetch();
    var view = new Webspinr.Views.EditSite({ model: site, pageId: pageId });
    this._swapView(view);
  },

  newSite: function () {
    var view = new Webspinr.Views.NewSite();
    this._swapView(view);
  },

  editSite: function (id) {
    var site = new Webspinr.Models.Site({ id: id });
    site.fetch();
    var view = new Webspinr.Views.EditSite({ model: site });
    this._swapView(view);
  },

  showSiteIndex: function (id) {
    var site = new Webspinr.Models.Site({ id: id });
    site.fetch();
    var view = new Webspinr.Views.Site({ model: site});
    this._swapView(view);
  },

  showSitePage: function (id, pageName) {
    var site = new Webspinr.Models.Site({ id: id});
    site.fetch();
    var view = new Webspinr.Views.Site({ model: site, pageName: pageName});
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
