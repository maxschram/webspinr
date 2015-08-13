window.Webspinr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    new Webspinr.Routers.SiteRouter({
      $rootEl: $("#root")
    });
    Backbone.history.start();
  }
};

$(document).ready(function () {
  Webspinr.initialize();
});
