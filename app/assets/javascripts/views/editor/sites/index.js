Webspinr.Views.SitesIndex = Backbone.CompositeView.extend({
  template: JST["sites/index"],
  className: 'site-index',

  events: {
    // "click .new-site": "newSite"
  },

  initialize: function () {
    this.listenTo(this.collection, "add", this.addSiteIndexItem);
    this.collection.each(this.addSiteIndexItem.bind(this));
    this.addNewSiteView();
  },

  newSite: function () {
    Backbone.history.navigate("#/new", { trigger: true });
  },

  addNewSiteView: function () {
    var subview = new Webspinr.Views.NewSite();
    this.addSubview(".new-site", subview);
  },

  addSiteIndexItem: function (site) {
    var subview = new Webspinr.Views.SitesIndexItem({ model: site });
    this.addSubview(".sites", subview);
    subview.render();
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    indexTour.start();
    return this;
  }
});
