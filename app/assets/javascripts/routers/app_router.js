Webspinr.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    '': 'newSite',
    'sites/:id/edit': 'editSite',
    'sites/:id': 'showSiteIndex',
    'sites/:id/:pageTitle': 'showSitePage'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
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
    var view = new Webspinr.Views.Site({ model: site, page: "index" });
    this._swapView(view);
  },

  showSitePage: function (id, pageTitle) {
    var site = new Webspinr.Models.Site({ id: id});
    site.fetch();
    var view = new Webspinr.Views.Site({ model: site, page: pageTitle});
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
