window.Webspinr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    new Webspinr.Routers.EditorRouter({
      $rootEl: $("#root")
    });
    Backbone.history.start();
  }
};

$(document).ready(function () {
  Webspinr.initialize();
});
