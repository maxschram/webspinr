Webspinr.Views.SitesIndex = Backbone.CompositeView.extend({
  template: JST["sites/index"],
  className: 'site-index',

  events: {
    // "click .new-site": "newSite"
  },

  initialize: function () {
    this.listenTo(this.collection, "add", this.addSiteIndexItem);
    this.listenTo(this.collection, "add", this.createThumbnail);
    this.collection.each(this.addSiteIndexItem.bind(this));
    this.collection.each(this.createThumbnail.bind(this));
    this.addNewSiteView();
  },

  createThumbnail: function (site) {
    var url = window.location.hostname + "/sites/" + site.id;
    $.ajax("http://api.page2images.com/restfullink?p2i_url=" + url+ "&p2i_key=2d8eda2ffe5ba92f", {
      dataType: "json",
      success: function (data) {
        if (data.status === "finished") {
          this.$(".thumbnail-image").attr("href", data.image_url);
        } else if (data.status === "processing") {
          setTimeout(this.createThumbnail.bind(this, site), data.estimated_need_time * 1000 );
        }
      }.bind(this),
      error: function () {
        debugger
      }
    });
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
    return this;
  }
});
