Webspinr.Views.EditSite = Backbone.CompositeView.extend({
  model: Webspinr.Models.Site,
  template: JST["sites/edit"],
  events: {
    "click .live": "viewLive",
    "mouseenter .menu-button": "toggleMenu",
    "mouseleave .menu-bar": "toggleMenu"
  },


  initialize: function (options) {
    this.listenTo(this.model, "sync", this.addPageView);
    this.listenTo(this.model, "sync", this.render);
    this.pageId = options.pageId;
    this.addElementsMenu();
    this.addPagesMenu();
  },

  toggleMenu: function () {
    this.$(".menu-bar").toggleClass("show");
  },

  currentPage : function () {
    if (this.pageId) {
      return this.model.pages().get(this.pageId);
    } else {
      return this.model.pages().at(0);
    }
  },

  addPagesMenu: function () {
    var subview = this._pagesMenuView = new Webspinr.Views.PagesMenu({
      collection: this.model.pages(),
      model: this.model
    });
    this.addSubview(".menu-bar", subview);
    subview.render();
  },

  addElementsMenu: function () {
    var subview = this._elementsMenuView = new Webspinr.Views.ElementsMenu();
    this.addSubview(".menu-bar", subview);
    subview.render();
  },

  addPageView: function () {
    var page = this.currentPage();
    var subview = new Webspinr.Views.EditPage({
      model: page,
      collection: page.elements()
    });
    this._elementsMenuView.currentPageView = subview;
    this.addSubview("#page", subview);
    subview.render();
  },

  viewLive: function () {
    Backbone.history.navigate("#/sites/" + this.model.id, { trigger: true });
  },

  render: function () {
    this.$el.html(this.template({ site: this.model }));
    this.attachSubviews();
    this.onRender();
    return this;
  }
});
