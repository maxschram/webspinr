Webspinr.Views.EditSite = Backbone.View.extend({
  model: Webspinr.Models.Site,
  template: JST["sites/edit"],
  events: {

  },

  initialize: function () {

  },

  render: function () {
    this.$el.html(this.template({ site: this.model }));
    return this;
  }
});
