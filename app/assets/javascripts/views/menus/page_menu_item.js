Webspinr.Views.PageMenuItem = Backbone.View.extend({
  template: JST["menus/page_menu_item"],
  tagName: 'button',

  initialize: function (options) {
    this.site = options.site
  },

  events: {
    "click": "switchPage"
  },

  switchPage: function () {
    Backbone.history.navigate(
      "#/sites/"+ this.site.id + "/edit/" + this.model.id,
      { trigger: true }
    );
  },

  render: function () {
    this.$el.html(this.template({ page: this.model }));
    return this;
  }
});
