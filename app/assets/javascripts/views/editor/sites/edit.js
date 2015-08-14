Webspinr.Views.EditSite = Backbone.CompositeView.extend({
  model: Webspinr.Models.Site,
  template: JST["sites/edit"],
  className: 'site',
  events: {
    "click .live": "viewLive",
    "mouseenter .menu-button": "toggleMenu",
    "mouseleave .menu-bar": "toggleMenu",
    "click .new-page": "addPage",
    "click .index": "viewIndex"
  },


  initialize: function (options) {
    this.listenTo(this.model, "sync", this.addPageView);
    this.listenTo(this.model, "sync", this.render);
    this.pageName = options.pageName;
    this.addElementsMenu();
    this.addPagesMenu();
  },

  viewIndex: function () {
    Backbone.history.navigate("", { trigger: true });
  },

  addPage: function () {
    var pages = this.model.pages();
    var view = this;
    var title = prompt("Enter a title for the new page");

    var newPage = new Webspinr.Models.Page({
      title: title,
      site_id: this.model.id,
      background: "green"
    });


    newPage.save({}, {
      success: function () {
        pages.add(newPage);
        view.render();
        Backbone.history.navigate("#/editor/" + this.model.id + "/" + newPage.id);
      }
    });
  },

  toggleMenu: function () {
    this.$(".menu-bar").toggleClass("show");
  },

  currentPage : function () {
    if (this.pageName) {
      return this.model.pages().findWhere({ title: this.pageName });
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
    var subview = this._elementsMenuView = new Webspinr.Views.ElementsMenu({
      model : this.model,
      collection: this.model.pages()
    });
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
    this.addSubview("#page-container", subview);
    subview.render();
  },

  viewLive: function () {
    //TODO: change site title to address
    window.open("/sites/#/"+ this.model.id + "/" + this.currentPage().get("title"));
  },

  render: function () {
    this.$el.html(this.template({ site: this.model }));
    this.attachSubviews();
    this.onRender();
    return this;
  }
});
