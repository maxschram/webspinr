Webspinr.Views.PageMenuItem = Backbone.View.extend({
  template: JST["menus/page_menu_item"],
  tagName: 'button',
  className: "btn btn-default",

  initialize: function (options) {
    this.site = options.site;
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click": "switchPage"
  },

  switchPage: function (e) {
    $(e.currentTarget).blur();
    Backbone.history.navigate(
      this.site.id + "/" + this.model.get("title"),
      { trigger: true }
    );
  },

  render: function () {
    this.$el.html(this.template({ page: this.model }));
    return this;
  }
});
