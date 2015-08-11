window.Webspinr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    new Webspinr.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(document).ready(function () {
  Webspinr.initialize();
});
