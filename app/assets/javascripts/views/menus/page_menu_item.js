Webspinr.Views.PageMenuItem = Backbone.View.extend({
  template: JST["menus/page_menu_item"],
  tagName: 'button',

  render: function () {
    this.$el.html(this.template({ page: this.model }));
    return this;
  }
});
