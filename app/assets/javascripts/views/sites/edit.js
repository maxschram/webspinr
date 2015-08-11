Webspinr.Views.EditSite = Backbone.CompositeView.extend({
  model: Webspinr.Models.Site,
  template: JST["sites/edit"],
  events: {
    "click .live": "viewLive",
    "mouseenter .menu-button": "toggleMenu",
    "mouseleave .menu-bar": "toggleMenu"
  },


  initialize: function () {
    this.listenTo(this.model, "sync", this.addPageView);
    this.listenTo(this.model, "sync", this.render);
    this.addElementsMenu();
  },

  toggleMenu: function () {
    this.$(".menu-bar").toggleClass("show");
  },

  addElementsMenu: function () {
    var subview = this._elementsMenuView = new Webspinr.Views.ElementsMenu();
    this.addSubview(".menu-bar", subview);
    subview.render();
  },

  addPageView: function () {
    var page = this.model.pages().models[0];
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
    return this;
  }
});
