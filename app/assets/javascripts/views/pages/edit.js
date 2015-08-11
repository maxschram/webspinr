Webspinr.Views.EditPage = Backbone.CompositeView.extend({
  template: JST["pages/edit"],

  inititialize: function () {
    this.listenTo(this.collection, 'add', this.addElementView);
    this.collection.each(this.addElementView.bind(this));
  },

  addElementView: function (element) {
    var subview = new ElementView({ model: element });
    this.addSubview("#elements", subview);
  },

  render: function () {
    this.$el.html(this.template({ page: this.model }));
    this.attachSubviews();
    return this;
  }
});
