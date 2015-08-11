Webspinr.Views.NewSite = Backbone.CompositeView.extend({
  model: Webspinr.Models.Site,
  template: JST["sites/new"],
  events: {
    "submit form": "createSite"
  },

  initialize: function () {

  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  createSite: function (e) {
    e.preventDefault();
    var formData = this.$("form").serializeJSON();
    var site = new Webspinr.Models.Site(formData);
    site.save({}, {
      success: function () {
        Backbone.history.navigate(
          ("#/sites/" + site.id + "/edit"),
          { trigger: true }
        );
      }
    });
  }
});
