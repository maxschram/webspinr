Webspinr.Views.EditSite = Backbone.View.extend({
  model: Webspinr.Models.Site,
  template: JST["sites/edit"],
  events: {

  },

  initialize: function () {
    this.addPageView();
  },

  addPageView: function () {
    var page = this.model.pages()[0];
    var subview = new Webspinr.Views.EditPage({
      model: page,
      collection: page.elements()
    });
    this.addSubview("#page", subview);
  },

  render: function () {
    this.$el.html(this.template({ site: this.model }));
    this.attachSubviews();
    return this;
  }
});
