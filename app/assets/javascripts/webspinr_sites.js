Webspinr.initialize = function (options) {
  new Webspinr.Routers.SiteRouter({
    $rootEl: $("#root"),
    siteId: options.siteId,
    pageName: options.pageName
  });
  Backbone.history.start();
};
