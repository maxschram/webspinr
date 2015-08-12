Webspinr.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    '': 'newSite',
    'sites/:id/edit': 'editSite',
    'sites/:id/edit/:pageId': 'editSitePage',
    'sites/:id': 'showSiteIndex',
    'sites/:id/:pageId': 'showSitePage'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
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

  showSitePage: function (id, pageId) {
    var site = new Webspinr.Models.Site({ id: id});
    site.fetch();
    var view = new Webspinr.Views.Site({ model: site, pageId: pageId});
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
