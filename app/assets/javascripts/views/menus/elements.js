Webspinr.Views.ElementsMenu = Backbone.View.extend({
  template: JST["menus/elements"],
  className: 'elements-menu',

  initialize: function (options) {

  },

  events: {
    "click .text": "createText",
    "click .list": "createList",
    "click .box": "createBox"
  },

  createText: function () {
    var element = new Webspinr.Models.Element({
      tag: "p",
      content: "Click here to enter your text...",
      page_id: this.currentPageView.model.id,
      style: "top: 50%; left: 50%; position: absolute",
      classes: "text"
    });
    this.currentPageView.collection.add(element);
  },

  createBox: function () {
    var element = new Webspinr.Models.Element({
      tag: "div",
      classes: "box",
      page_id: this.currentPageView.model.id,
      style: "top: 50%; left: 50%; position: absolute"
    });
    this.currentPageView.collection.add(element);
  },

  createList: function () {
    alert("list");
  },

  render: function () {
    this.$el.html(this.template());
    this.delegateEvents();
    return this;
  }
});
