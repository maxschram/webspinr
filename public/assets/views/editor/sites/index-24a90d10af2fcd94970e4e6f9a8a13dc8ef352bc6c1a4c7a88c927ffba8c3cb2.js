Webspinr.Views.SitesIndex = Backbone.CompositeView.extend({
  template: JST["sites/index"],
  className: 'site-index',

  events: {
    "click .new-site": "newSite"
  },

  initialize: function () {
    this.listenTo(this.collection, "add", this.addSiteIndexItem);
    this.collection.each(this.addSiteIndexItem.bind(this));
  },

  newSite: function () {
    Backbone.history.navigate("#/new", { trigger: true });
  },

  addSiteIndexItem: function (site) {
    var subview = new Webspinr.Views.SitesIndexItem({ model: site });
    this.addSubview(".sites", subview);
    subview.render();
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  }
});
