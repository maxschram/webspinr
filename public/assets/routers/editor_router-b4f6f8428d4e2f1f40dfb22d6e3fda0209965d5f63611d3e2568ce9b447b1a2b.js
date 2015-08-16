Webspinr.Routers.EditorRouter = Backbone.Router.extend({

  routes: {
    '': 'siteIndex',
    'new': 'newSite',
    ':id': 'editSite',
    ':id/:pageName': 'editSitePage'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  siteIndex: function () {
    var sites = new Webspinr.Collections.Sites();
    sites.fetch();
    var view = new Webspinr.Views.SitesIndex({ collection: sites });
    this._swapView(view);
  },

  editSitePage: function (id, pageName) {
    var site = new Webspinr.Models.Site({ id: id });
    site.fetch();
    var view = new Webspinr.Views.EditSite({ model: site, pageName: pageName });
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

  _swapView: function (view) {
    if (this._view) {
      this._view.remove();
    }

    this.$rootEl.html(view.$el);
    view.render();
  }
});
