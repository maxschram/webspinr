Webspinr.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    '': 'newSite',
    'sites/:id/edit': 'editSite'
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

  _swapView: function (view) {
    if (this._view) {
      this._view.remove();
    }

    this.$rootEl.html(view.$el);
    view.render();
  }
});
