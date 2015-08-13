Webspinr.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    '': 'newSite',
    ':id': 'editSite',
    ':id/:pageId': 'editSitePage'
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

  _swapView: function (view) {
    if (this._view) {
      this._view.remove();
    }

    this.$rootEl.html(view.$el);
    view.render();
  }
});
