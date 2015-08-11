Webspinr.Routers.AppRouter = Backbone.Router.extend({

  routes: {
    '': 'newSite'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  newSite: function () {
    
  },

  _swapView: function (view) {
    if (this._view) {
      this._view.remove();
    }

    this.$rootEl.html(view.$el);
    view.render();
  }
});
