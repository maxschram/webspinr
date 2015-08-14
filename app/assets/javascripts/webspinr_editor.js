Webspinr.initialize = function () {
  new Webspinr.Routers.EditorRouter({
    $rootEl: $("#root")
  });
  Backbone.history.start();
};
