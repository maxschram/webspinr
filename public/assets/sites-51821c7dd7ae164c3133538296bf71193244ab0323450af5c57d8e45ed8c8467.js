Webspinr.initialize = function () {
  new Webspinr.Routers.SiteRouter({
    $rootEl: $("#root")
  });
  Backbone.history.start();
};
(function() { this.JST || (this.JST = {}); this.JST["elements/edit"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('',  element.escape("content") ,'\n<div class="element-properties-menu"></div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["elements/element"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('',  element.escape("content") ,'\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["elements/properties_menu"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="btn-group-vertical menu" role="group" aria-label="...">\n  <h2 class="heading">Edit Properties</h2>\n  <button class="color btn btn-default">Color</button>\n  <button class="delete btn btn-default">Delete</button>\n  <h3 class="subheading">Styles</h3>\n    <div class="btn-group-xs styles" role="group" aria-label="...">\n      <button class="btn btn-default style" data-style="1">1</button>\n      <button class="btn btn-default style" data-style="2">2</button>\n      <button class="btn btn-default style" data-style="3">3</button>\n    </div>\n</div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["elements/text_form"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<form>\n<!-- <input type="text" name="content" value="',  element.escape("content") ,'"> -->\n<textarea name="content" rows="10" cols="50">',  element.escape("content") ,'</textarea>\n</form>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["menus/elements"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="menu btn-group-vertical" role="group" aria-label="...">\n  <h3 class="menu-title">Elements</h3>\n  <button class="text btn btn-default">Text</button>\n  <button class="box-el btn btn-default">Box</button>\n  <button class="line btn btn-default">Line</button>\n  <button class="image btn btn-default">Image</button>\n  <button class="internal-link btn btn-default">Link to Internal Page</button>\n  <button class="external-link btn btn-default">Link to External Page</button>\n</div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["menus/page_menu_item"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('',  page.escape("title") ,'\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["menus/page_properties"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="menu btn-group-vertical" role="group" aria-label="...">\n  <h3 class="menu-title">Page Properties</h3>\n\n  <form>\n    Title: <input type="text" id="title" name="title" value="',  page.escape("title") ,'">\n  </form>\n  <button class="background-color btn btn-default">Background Color</button>\n  <button class="background-image btn btn-default">Background Image</button>\n</div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["menus/pages"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<span class="menu-title">Pages</span>\n\n<div class="menu btn-group-vertical" role="group" aria-label="...">\n  <div class="pages btn-group-vertical" role="group" aria-label="...">\n  </div>\n  <button class="btn btn-default new-page">Add</button>\n</div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["pages/edit"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div id="elements"></div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["pages/page"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div id="elements"></div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["sites/edit"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="menu-button"><span>+</span></div>\n<div class="menu-bar"></div>\n<div id="page-container" class="editing"></div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["sites/index"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h2>Your Sites</h2>\n\n<ul class="sites">\n</ul>\n\n<button class="new-site">Create a new site</button>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["sites/index_item"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<li class="site-index-item">\n  ',  site.escape("title") ,'\n</li>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["sites/new"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<form>\n  <label for="title">Title</label>\n  <input type="text" name="title" id="title">\n  <br>\n  <lable for="description">Description</lable>\n  <input type="text" name="description" id="description">\n  <br>\n  <input type="submit" value="Create">\n</form>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["sites/site"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div id="page-container"></div>\n');}return __p.join('');};
}).call(this);
Webspinr.Models.Element = Backbone.Model.extend({
  urlRoot: '/api/elements',

  // Overwrite proto toJSON to deeply copy attrs
  toJSON: function () {
    var json = Backbone.Model.prototype.toJSON.call(this);
    json.attrs = JSON.stringify(this.get("attrs"));
    return json;
  }
});
Webspinr.Models.Page = Backbone.Model.extend({

  urlRoot: '/api/pages',

  elements: function () {
    if (!this._elements) {
      this._elements = new Webspinr.Collections.Elements();
    }
    return this._elements;
  },

  parse: function (payload) {
    if (payload.elements) {
      this.elements().set(payload.elements);
      delete payload.elements;
    }
    return payload;
  }
});
Webspinr.Models.Site = Backbone.Model.extend({
  urlRoot: '/api/sites',

  pages: function () {
    if (!this._pages) {
      this._pages = new Webspinr.Collections.Pages();
    }
    return this._pages;
  },

  parse: function (payload) {
    if (payload.pages) {
      this.pages().set(payload.pages, { parse: true });
      delete payload.pages;
    }

    return payload;
  }
});
Webspinr.Collections.Elements = Backbone.Collection.extend({
  model: Webspinr.Models.Element
});
Webspinr.Collections.Pages = Backbone.Collection.extend({
  model: Webspinr.Models.Page
});
Webspinr.Collections.Sites = Backbone.Collection.extend({
  model: Webspinr.Models.Site,
  url: '/api/sites'
});
Webspinr.Views.Element = Backbone.CompositeView.extend({
  template: JST["elements/element"],

  className: function (){
    if (this.model.get("attrs").class) {
      var classes = this.model.get("attrs").class.join(" ");
    }
    return "element " + classes;
  },

  tagName: function () {
    return this.model.get("tag");
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, "change", this.saveElement);
    this.render();
  },

  setAttrs: function () {
    var attrs = this.model.get("attrs");
    for (var attr in attrs) {
      if (attr === "style") {
        this.setStyle(attrs[attr]);
      } else if (attr === 'class') {
        attrs[attr].forEach(function (klass) {
          this.$el.addClass(klass);
        }.bind(this));
      } else {
        this.$el.attr(attr, attrs[attr]);
      }
    }
  },

  setStyle: function (style) {
    for(var prop in style) {
      this.$el.css(prop, style[prop]);
    }
  },

  render: function () {
    this.$el.html(this.template({ element: this.model }));
    this.delegateEvents();
    this.onRender();
    this.attachSubviews();
    return this;
  },

  onRender: function () {
    this.setAttrs();
  }
});
Webspinr.Views.Page = Backbone.CompositeView.extend({
  template: JST["pages/page"],
  className: 'page',

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, 'add', this.addElementView);
    this.collection.each(this.addElementView.bind(this));
  },

  addElementView: function (element) {
    var subview = new Webspinr.Views.Element({ model: element });
    this.addSubview("#elements", subview);
  },

  render: function () {
    this.$el.html(this.template({ page: this.model }));
    this.$el.css("background-image", this.model.get("background_image"));
    this.$el.css("background-color", this.model.get("background_color"));
    this.attachSubviews();
    return this;
  }
});
Webspinr.Views.Site = Backbone.CompositeView.extend({
  model: Webspinr.Models.Site,
  template: JST["sites/site"],
  className: 'site',
  events: {

  },

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.addPageView);
    this.listenTo(this.model, "sync", this.render);
    this.pageName = options.pageName;
  },

  addPageView: function () {
    var page;
    if (!this.pageName) {
      page = this.model.pages().at(0);
    } else {
      page = this.model.pages().findWhere({ title: this.pageName });
      // page = this.model.pages().get(this.pageId);
      if (!page) {
        alert("page not found");
      }
    }

    var subview = new Webspinr.Views.Page({
      model: page,
      collection: page.elements()
    });
    this.addSubview("#page-container", subview);
  },

  render: function () {
    this.$el.html(this.template({ site: this.model }));
    this.attachSubviews();
    this.onRender();
    return this;
  }
});
Webspinr.Routers.EditorRouter = Backbone.Router.extend({

  routes: {
    '': 'siteIndex',
    'new': 'newSite',
    ':id': 'editSite',
    ':id/:pageName': 'editSitePage'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  siteIndex: function () {
    var sites = new Webspinr.Collections.Sites();
    sites.fetch();
    var view = new Webspinr.Views.SitesIndex({ collection: sites });
    this._swapView(view);
  },

  editSitePage: function (id, pageName) {
    var site = new Webspinr.Models.Site({ id: id });
    site.fetch();
    var view = new Webspinr.Views.EditSite({ model: site, pageName: pageName });
    this._swapView(view);
  },

  newSite: function () {
    var view = new Webspinr.Views.NewSite();
    this._swapView(view);
  },

  editSite: function (id) {
    var site = new Webspinr.Models.Site({ id: id });
    site.fetch();
    var view = new Webspinr.Views.EditSite({ model: site });
    this._swapView(view);
  },

  _swapView: function (view) {
    if (this._view) {
      this._view.remove();
    }

    this.$rootEl.html(view.$el);
    view.render();
  }
});
Webspinr.Routers.SiteRouter = Backbone.Router.extend({

  routes: {
    ':id': 'showSiteIndex',
    ':id/:pageName': 'showSitePage'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  editSitePage: function (id, pageId) {
    var site = new Webspinr.Models.Site({ id: id });
    site.fetch();
    var view = new Webspinr.Views.EditSite({ model: site, pageId: pageId });
    this._swapView(view);
  },

  newSite: function () {
    var view = new Webspinr.Views.NewSite();
    this._swapView(view);
  },

  editSite: function (id) {
    var site = new Webspinr.Models.Site({ id: id });
    site.fetch();
    var view = new Webspinr.Views.EditSite({ model: site });
    this._swapView(view);
  },

  showSiteIndex: function (id) {
    var site = new Webspinr.Models.Site({ id: id });
    site.fetch();
    var view = new Webspinr.Views.Site({ model: site});
    this._swapView(view);
  },

  showSitePage: function (id, pageName) {
    var site = new Webspinr.Models.Site({ id: id});
    site.fetch();
    var view = new Webspinr.Views.Site({ model: site, pageName: pageName});
    this._swapView(view);
  },

  _swapView: function (view) {
    if (this._view) {
      this._view.remove();
    }

    this.$rootEl.html(view.$el);
    view.render();
  }
});






