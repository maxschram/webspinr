Webspinr.Views.PagesMenu = Backbone.CompositeView.extend({
  template: JST["menus/pages"],
  className: 'pages-menu',

  initialize: function (options) {
    this.listenTo(this.collection, "add", this.addPageMenuItemView);
    this.listenTo(this.collection, "add", this.render);
    this.collection.each(this.addPageMenuItemView.bind(this));
  },

  events: {

  },

  addPageMenuItemView: function (page) {
    var subview = new Webspinr.Views.PageMenuItem({ model: page });
    this.addSubview(".pages", subview);
    subview.render();
  },

  saveElement: function (element) {
    element.save({}, {
      success: function () {
        this.currentPageView.collection.add(element);
      }
    });
  },

  createImage: function (src) {
    var element = new Webspinr.Models.Element({
      tag: "img",
      page_id: this.currentPageView.model.id,
      style: "top: 50%; left: 50%; position: absolute",
      src: src
    });
    this.currentPageView.collection.add(element);
    // this.saveElement();
  },

  render: function () {
    this.$el.html(this.template());
    this.delegateEvents();
    return this;
  }
});
