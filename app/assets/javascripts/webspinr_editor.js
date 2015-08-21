Webspinr.initialize = function () {
  new Webspinr.Routers.EditorRouter({
    $rootEl: $("#root")
  });
  Backbone.history.start();
};

$(document).ready(function () {
  Webspinr.initialize();
});
