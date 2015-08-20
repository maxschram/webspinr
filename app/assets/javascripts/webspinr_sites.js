Webspinr.initialize = function (options) {
  new Webspinr.Routers.SiteRouter({
    $rootEl: $("#root"),
    siteId: options.siteId
  });
  Backbone.history.start();
};
