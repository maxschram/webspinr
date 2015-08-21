Webspinr.initialize = function () {
  new Webspinr.Routers.EditorRouter({
    $rootEl: $("#root")
  });
  Backbone.history.start();
};

// tour = new Shepard.Tour({
//   defaults: {
//     classes: 'shepard-theme-arrows'
//   }
// });

// tour.addStep('test', {
//   title: "Welcome",
//   text: "hello",
//   attachTo: '.site-index'
// });

$(document).ready(function () {
  Webspinr.initialize();
  // tour.start();
});
