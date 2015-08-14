Webspinr.Views.SitesIndexItem = Backbone.View.extend({
  template: JST["sites/index_item"],

  events: {
    "click": "editSite"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  editSite: function () {
    Backbone.history.navigate("#/" + this.model.id, { trigger: true });
  },

  render: function () {
    this.$el.html(this.template({ site: this.model }));
    return this;
  }
});
