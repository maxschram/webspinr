Webspinr.initialize = function () {
  new Webspinr.Routers.SiteRouter({
    $rootEl: $("#root")
  });
  Backbone.history.start();
};
