Webspinr.Views.NewSite = Backbone.View.extend({
  model: Webspinr.Models.Site,
  template: JST["sites/new"],

  initialize: function () {

  },

  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
