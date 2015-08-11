Webspinr.Views.ElementsMenu = Backbone.View.extend({
  template: JST["menus/elements"],
  className: 'elements-menu',

  events: {
    "click .text": "createText",
    "click .list": "createList",
    "click .box": "createBox"
  },

  createText: function () {
    alert("text");
  },

  createList: function () {
    alert("list");
  },

  createBox: function () {
    alert("box");
  },

  render: function () {
    this.$el.html(this.template());
    this.delegateEvents();
    return this;
  }
});
